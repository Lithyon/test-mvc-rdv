import CreationCompteRepositoryImpl from "../../Repository/CreationCompte/CreationCompteRepositoryImpl";
import {FormErrorModelView} from "../../../Presentation/pages/Authentification/ModelView/FormError/FormErrorModelView";
import {BooleanChoiceCode} from "../../Data/Enum/BooleanChoice";
import {CreationCompteModelView} from "../../../Presentation/pages/Authentification/ModelView/CreationCompte/CreationCompteModelView";

export default class CreationCompteServiceImpl {
    private creationCompteRepo: CreationCompteRepositoryImpl;

    constructor(_creationCompteRepo: CreationCompteRepositoryImpl) {
        this.creationCompteRepo = _creationCompteRepo;
    }

    validationFormulaire(creationCompte: CreationCompteModelView) {
        // TODO Voir avec Antoine pour opti
        const formError: FormErrorModelView = {errors: {}};

        if (creationCompte.parrainageChoix && creationCompte.parrainageChoix.code === BooleanChoiceCode.OUI) {
            if (creationCompte.parrainageNumeroSocietaire.numeroSocietaire?.length > 0) {
                const testRegex: RegExpMatchArray = creationCompte.parrainageNumeroSocietaire.numeroSocietaire.match(/\W|\D/) || [];

                if (testRegex.length > 0) {
                    formError.errors.numeroSocietaire = "Le numéro de sociétaire ne doit pas contenir de caractères spéciaux";
                }
            }
        }

        if (!creationCompte.civilite.code) {
            formError.errors.civilite = "Veuillez préciser votre civilité";
        }

        if (!creationCompte.informationsCommercialesEmail.code) {
            formError.errors.informationsCommercialesEmail = "Veuillez préciser si vous souhaitez recevoir des informations commerciales des entités du groupe MACIF par e-mail";
        }

        if (!creationCompte.informationsCommercialesSms.code) {
            formError.errors.informationsCommercialesSms = "Veuillez préciser si vous souhaitez recevoir des informations commerciales des entités du groupe MACIF par SMS";
        }

        if (!creationCompte.informationsCommercialesTelephone.code) {
            formError.errors.informationsCommercialesTelephone = "Veuillez préciser si vous souhaitez recevoir des informations commerciales des entités du groupe MACIF par message vocal";
        }

        return formError;
    }
}