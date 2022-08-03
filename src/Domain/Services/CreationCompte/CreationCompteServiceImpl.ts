import CreationCompteRepositoryImpl from "../../Repository/CreationCompte/CreationCompteRepositoryImpl";
import {BooleanChoiceCode} from "../../Data/Enum/BooleanChoice";
import {CreationCompteModelView} from "../../../Presentation/pages/Authentification/ModelView/CreationCompte/CreationCompteModelView";
import RendezVousSelectionModelView from "../../../Presentation/pages/RendezVous/ModelView/RendezVous/RendezVousSelectionModelView";
import {RendezVousRepositoryImpl} from "../../Repository/RendezVous";
import {CommunesRepositoryImpl} from "../../Repository/Communes";
import FormErrorModelViewBuilder from "../../../Presentation/pages/Authentification/ModelView/FormError/FormErrorModelViewBuilder";
import FormErrorModelView from "../../../Presentation/pages/Authentification/ModelView/FormError/FormErrorModelView";
import CommunesRequest from "../../Model/Commune/CommunesRequest";
import {format, isAfter, isBefore, isEqual, subMonths, subYears} from "date-fns";
import CreationCompteRequest from "../../Model/CreationCompte/CreationCompteRequest";
import RendezVousRequest from "../../Model/RendezVous/RendezVousRequest";

export default class CreationCompteServiceImpl {
    private readonly _creationCompteRepo: CreationCompteRepositoryImpl;
    private readonly _rendezVousRepo: RendezVousRepositoryImpl;
    private readonly _communesRepo: CommunesRepositoryImpl;

    constructor(creationCompteRepo: CreationCompteRepositoryImpl, rendezVousRepo: RendezVousRepositoryImpl, communesRepo: CommunesRepositoryImpl) {
        this._creationCompteRepo = creationCompteRepo;
        this._rendezVousRepo = rendezVousRepo;
        this._communesRepo = communesRepo;
    }

    private static verifierContenuNomEtPrenom(value: string): boolean {
        const testRegex: RegExpMatchArray = value.match(/^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]{1}[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ\s-]+$/) || [];
        return testRegex.length === 0;
    }

    private static verifierEmail(value: string): boolean {
        const testRegex: RegExpMatchArray = value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/) || [];
        return testRegex.length === 0;
    }

    private static verifierTelephone(value: string): boolean {
        const testRegex: RegExpMatchArray = value.match(/^0\d{9}/) || [];
        return testRegex.length === 0;
    }

    getCommunes(request: CommunesRequest) {
        return this._communesRepo.getCommunes(request);
    }

    formHasError(formError: FormErrorModelView): boolean {
        return Object.values(formError).filter((v: string) => v !== "").length !== 0;
    }

    validationFormulaireCreationCompte(creationCompte: CreationCompteModelView, noSocietaireParrain: string): FormErrorModelView {
        const formError = FormErrorModelViewBuilder.buildEmpty();

        if (creationCompte.parrainageChoix && creationCompte.parrainageChoix.code === BooleanChoiceCode.OUI && noSocietaireParrain?.length > 0) {
            const testRegex: RegExpMatchArray = noSocietaireParrain.match(/\W/) || [];

            if (testRegex.length > 0) {
                formError.noSocietaireParrain = "Le numéro de sociétaire ne doit pas contenir de caractères spéciaux";
            }
        }

        if (!creationCompte.civilite.code) {
            formError.civilite = "Veuillez préciser votre civilité";
        }

        if (creationCompte.nom.length === 0) {
            formError.nom = "Veuillez renseigner votre nom";
        } else if (CreationCompteServiceImpl.verifierContenuNomEtPrenom(creationCompte.nom)) {
            formError.nom = "Veuillez saisir en premier une lettre alphabétique, les chiffres et caractères spéciaux ne sont pas autorisés";
        }

        if (creationCompte.prenom.length === 0) {
            formError.prenom = "Veuillez renseigner votre prénom";
        } else if (CreationCompteServiceImpl.verifierContenuNomEtPrenom(creationCompte.prenom)) {
            formError.prenom = "Veuillez saisir en premier une lettre alphabétique, les chiffres et caractères spéciaux ne sont pas autorisés";
        }

        if (creationCompte.numeroTelephone.length === 0) {
            formError.numeroTelephone = "Veuillez renseigner votre numéro de téléphone";
        } else if (CreationCompteServiceImpl.verifierTelephone(creationCompte.numeroTelephone)) {
            formError.numeroTelephone = "Le numéro de téléphone renseigné est incorrect";
        }

        if (creationCompte.email.length === 0) {
            formError.email = "Veuillez renseigner votre adresse e-mail";
        } else if (CreationCompteServiceImpl.verifierEmail(creationCompte.email)) {
            formError.email = "L'adresse e-mail est invalide";
        }

        if (isEqual(creationCompte.dateNaissance, new Date(0))) {
            formError.dateNaissance = "La date saisie est incorrecte (JJ/MM/AAAA)";
        } else {
            const date18ans = subYears(new Date(), 18);

            if (isBefore(creationCompte.dateNaissance, new Date(1900, 0, 1))
                || isAfter(creationCompte.dateNaissance, subMonths(date18ans, 18))) {
                formError.dateNaissance = `La date doit être comprise entre 01/01/1900 et ${date18ans.toLocaleDateString()}`;
            }
        }

        if (!creationCompte.commune || !creationCompte.commune.nom || creationCompte.commune.nom === "") {
            formError.commune = "Veuillez renseigner le code postal ou la commune";
        }

        if (!creationCompte.situationFamiliale.code) {
            formError.situationFamiliale = "Veuillez renseigner votre situation familiale";
        }

        if (!creationCompte.profession.code) {
            formError.profession = "Veuillez renseigner votre profession";
        }

        if (!creationCompte.informationsCommercialesEmail.code) {
            formError.informationsCommercialesEmail =
                "Veuillez préciser si vous souhaitez recevoir des informations commerciales des entités du groupe MACIF par e-mail";
        }

        if (!creationCompte.informationsCommercialesSms.code) {
            formError.informationsCommercialesSms =
                "Veuillez préciser si vous souhaitez recevoir des informations commerciales des entités du groupe MACIF par SMS";
        }

        if (!creationCompte.informationsCommercialesTelephone.code) {
            formError.informationsCommercialesTelephone =
                "Veuillez préciser si vous souhaitez recevoir des informations commerciales des entités du groupe MACIF par message vocal";
        }

        return formError;
    }

    async creationCompte(creationCompte: CreationCompteModelView, rendezVous: RendezVousSelectionModelView): Promise<FormErrorModelView> {
        const formError = this.validationFormulaireCreationCompte(creationCompte, rendezVous.noSocietaireParrain);

        if (!this.formHasError(formError)) {
            await this._creationCompteRepo.creationCompte(new CreationCompteRequest({
                cdCivil: creationCompte.civilite.code,
                nmPers: creationCompte.nom,
                znPrenPers: creationCompte.prenom,
                informationMacifMail: creationCompte.informationsCommercialesEmail.code === "O",
                informationMacifMessageVocal: creationCompte.informationsCommercialesTelephone.code === "O",
                informationMacifSms: creationCompte.informationsCommercialesSms.code === "O",
                dtNaisPers: format(creationCompte.dateNaissance, "yyyy-MM-dd"),
                noTeleLigne: creationCompte.numeroTelephone,
                cdProfPers: creationCompte.profession.code,
                cdSituatFamil: creationCompte.situationFamiliale.code,
                znAdrEmail: creationCompte.email,
                commune: {
                    nom: creationCompte.commune.nom,
                    codePostal: creationCompte.commune.codePostal,
                    lieuDit: creationCompte.commune.lieuDit,
                    nomAcheminement: creationCompte.commune.nomAcheminement,
                    ancienNom: creationCompte.commune.ancienNom,
                    codeInsee: creationCompte.commune.codeInsee,
                    departement: creationCompte.commune.departement,
                    pays: creationCompte.commune.pays
                }
            }));

            await this._rendezVousRepo.creerRendezVous(new RendezVousRequest({
                adresseMail: rendezVous.adresseMail,
                canalRendezVous: rendezVous.canalSelected.code,
                cdBuro: rendezVous.cdBuro,
                cdDemande: rendezVous.demandeSelected.code,
                cdDomaine: rendezVous.domaineSelected.code,
                estFilleul: rendezVous.estFilleul,
                heure: rendezVous.heure.code,
                jour: format(rendezVous.jour, "yyyy-MM-dd"),
                nmCommu: rendezVous.nmCommu,
                noSocietaireParrain: rendezVous.noSocietaireParrain,
                noTel: rendezVous.noTel,
                precision: rendezVous.precision
            }));
        }

        return formError;
    }
}
