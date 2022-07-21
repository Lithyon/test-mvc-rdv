import CreationCompteRepositoryImpl from "../../Repository/CreationCompte/CreationCompteRepositoryImpl";
import {BooleanChoiceCode} from "../../Data/Enum/BooleanChoice";
import {CreationCompteModelView} from "../../../Presentation/pages/Authentification/ModelView/CreationCompte/CreationCompteModelView";
import RendezVousSelectionModelView from "../../../Presentation/pages/RendezVous/ModelView/RendezVous/RendezVousSelectionModelView";
import {RendezVousRepositoryImpl} from "../../Repository/RendezVous";
import {buildCreationCompteRequest} from "../../Builders/CreationCompteBuilder";
import {buildCreerRendezVous} from "../../Builders/RendezVousBuilder";
import FormErrorModelViewBuilder from "../../../Presentation/pages/Authentification/ModelView/FormError/FormErrorModelViewBuilder";
import FormErrorModelView from "../../../Presentation/pages/Authentification/ModelView/FormError/FormErrorModelView";

export default class CreationCompteServiceImpl {
    private creationCompteRepo: CreationCompteRepositoryImpl;
    private rendezVousRepo: RendezVousRepositoryImpl;

    constructor(_creationCompteRepo: CreationCompteRepositoryImpl, _rendezVousRepo: RendezVousRepositoryImpl) {
        this.creationCompteRepo = _creationCompteRepo;
        this.rendezVousRepo = _rendezVousRepo;
    }

    private static verifierContenuNomEtPrenom(value: string): boolean {
        const testRegex: RegExpMatchArray = value.match(/\W|\d/) || [];
        return testRegex.length > 0;
    }

    formHasError(formError: FormErrorModelView) {
        return Object.values(formError).filter((v) => v !== "").length !== 0;
    }

    validationFormulaire(creationCompte: CreationCompteModelView, rendezVous: RendezVousSelectionModelView) {
        const formError = FormErrorModelViewBuilder.buildEmpty();

        if (creationCompte.parrainageChoix && creationCompte.parrainageChoix.code === BooleanChoiceCode.OUI) {
            if (rendezVous.noSocietaireParrain?.length > 0) {
                const testRegex: RegExpMatchArray = rendezVous.noSocietaireParrain.match(/\W/) || [];

                if (testRegex.length > 0) {
                    formError.noSocietaireParrain = "Le numéro de sociétaire ne doit pas contenir de caractères spéciaux";
                }
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

        if (!creationCompte.informationsCommercialesEmail.code) {
            formError.informationsCommercialesEmail = "Veuillez préciser si vous souhaitez recevoir des informations commerciales des entités du groupe MACIF par e-mail";
        }

        if (!creationCompte.informationsCommercialesSms.code) {
            formError.informationsCommercialesSms = "Veuillez préciser si vous souhaitez recevoir des informations commerciales des entités du groupe MACIF par SMS";
        }

        if (!creationCompte.informationsCommercialesTelephone.code) {
            formError.informationsCommercialesTelephone = "Veuillez préciser si vous souhaitez recevoir des informations commerciales des entités du groupe MACIF par message vocal";
        }

        return formError;
    }

    async creationCompte(creationCompte: CreationCompteModelView, rendezVous: RendezVousSelectionModelView) {
        const formError = this.validationFormulaire(creationCompte, rendezVous);

        if (!this.formHasError(formError)) {
            // MODEL transfo en state request
            await this.creationCompteRepo.creationCompte(buildCreationCompteRequest(creationCompte));
            await this.rendezVousRepo.creerRendezVous(buildCreerRendezVous(rendezVous));
        }

        return formError;
    }
}