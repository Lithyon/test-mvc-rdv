import CreationCompteRepositoryImpl from "../../Repository/CreationCompte/CreationCompteRepositoryImpl";
import {BooleanChoiceCode} from "../../Data/Enum/BooleanChoice";
import {CreationCompteModelView} from "../../../Presentation/pages/Authentification/ModelView/CreationCompte/CreationCompteModelView";
import RendezVousSelectionModelView from "../../../Presentation/pages/RendezVous/ModelView/RendezVous/RendezVousSelectionModelView";
import {RendezVousRepositoryImpl} from "../../Repository/RendezVous";
import {CommunesRepositoryImpl} from "../../Repository/Communes";
import {buildCreationCompteRequest} from "../../Builders/CreationCompteBuilder";
import {buildCreerRendezVous} from "../../Builders/RendezVousBuilder";
import FormErrorModelViewBuilder from "../../../Presentation/pages/Authentification/ModelView/FormError/FormErrorModelViewBuilder";
import FormErrorModelView from "../../../Presentation/pages/Authentification/ModelView/FormError/FormErrorModelView";
import CommunesRequest from "../../Model/Commune/CommunesRequest";
import {isAfter, isBefore, isEqual, subMonths, subYears} from "date-fns";

export default class CreationCompteServiceImpl {
    private readonly _creationCompteRepo: CreationCompteRepositoryImpl;
    private readonly _rendezVousRepo: RendezVousRepositoryImpl;
    private readonly _communesRepo: CommunesRepositoryImpl;

    constructor(creationCompteRepo: CreationCompteRepositoryImpl, rendezVousRepo: RendezVousRepositoryImpl, communesRepo: CommunesRepositoryImpl) {
        this._creationCompteRepo = creationCompteRepo;
        this._rendezVousRepo = rendezVousRepo;
        this._communesRepo = communesRepo;
    }

    getCommunes(request: CommunesRequest) {
        return this._communesRepo.getCommunes(request);
    }

    private static verifierContenuNomEtPrenom(value: string): boolean {
        const testRegex: RegExpMatchArray = value.match(/\W|\d/) || [];
        return testRegex.length > 0;
    }

    formHasError(formError: FormErrorModelView): boolean {
        return Object.values(formError).filter((v: string) => v !== "").length !== 0;
    }

    validationFormulaire(creationCompte: CreationCompteModelView, rendezVous: RendezVousSelectionModelView): FormErrorModelView {
        const formError = FormErrorModelViewBuilder.buildEmpty();

        if (creationCompte.parrainageChoix && creationCompte.parrainageChoix.code === BooleanChoiceCode.OUI && rendezVous.noSocietaireParrain?.length > 0) {
            const testRegex: RegExpMatchArray = rendezVous.noSocietaireParrain.match(/\W/) || [];

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

        const regexTelephone: RegExpMatchArray = creationCompte.numeroTelephone.match(/^0\d{9}/) || [];
        if (creationCompte.numeroTelephone.length === 0) {
            formError.numeroTelephone = "Veuillez renseigner votre numéro de téléphone";
        } else if (regexTelephone.length === 0) {
            formError.numeroTelephone = "Le numéro de téléphone renseigné est incorrect";
        }

        const regexEmail: RegExpMatchArray = creationCompte.email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/) || [];
        if (creationCompte.email.length === 0) {
            formError.email = "Veuillez renseigner votre adresse e-mail";
        } else if (regexEmail.length === 0) {
            formError.email = "L'adresse e-mail est invalide";
        }

        if (isEqual(creationCompte.dateNaissance, new Date(0))) {
            formError.dateNaissance = "La date saisie est incorrecte (JJ/MM/AAAA)";
        } else {
            const dateInferieureA1900 = isBefore(creationCompte.dateNaissance, new Date(1900, 0, 1));
            const date18ans = subYears(new Date(), 18);
            const utilisateurPlusDe18Ans = isAfter(creationCompte.dateNaissance, subMonths(date18ans, 18));

            if (dateInferieureA1900 || utilisateurPlusDe18Ans) {
                formError.dateNaissance = "La date doit être comprise entre 01/01/1900 et " + date18ans.toLocaleDateString();
            }
        }

        if (!creationCompte.commune.nom || creationCompte.commune.nom === "") {
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
        const formError = this.validationFormulaire(creationCompte, rendezVous);

        if (!this.formHasError(formError)) {
            // MODEL transfo en state request
            await this._creationCompteRepo.creationCompte(buildCreationCompteRequest(creationCompte));
            await this._rendezVousRepo.creerRendezVous(buildCreerRendezVous(rendezVous));
        }

        return formError;
    }
}
