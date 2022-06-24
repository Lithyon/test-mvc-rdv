import CreationCompteRepositoryImpl from "../../Repository/CreationCompte/CreationCompteRepositoryImpl";
import {AuthentificationModelView} from "../../../Presentation/pages/Authentification/AuthentificationController";
import {CreationCompteModelView} from "../../../Presentation/pages/Authentification/ModelView/CreationCompte/CreationCompteModelView";
import {ParrainageCode} from "../../Data/Enum/Parrainage";

export default class CreationCompteServiceImpl {
    private creationCompteRepo: CreationCompteRepositoryImpl;

    constructor(_creationCompteRepo: CreationCompteRepositoryImpl) {
        this.creationCompteRepo = _creationCompteRepo;
    }

    validationFormulaire(state: AuthentificationModelView): { [key: string]: string } {
        const errors: { [key: string]: string } = {};

        if (state.creationCompte.parrainageChoix && state.creationCompte.parrainageChoix.code === ParrainageCode.OUI) {
            if (state.creationCompte.parrainageNumeroSocietaire.numeroSocietaire?.length > 0) {
                const testRegex: RegExpMatchArray = state.creationCompte.parrainageNumeroSocietaire.numeroSocietaire.match(/\W|\D/) || [];

                if (testRegex.length > 0) {
                    errors.numeroSocietaire = "Le numéro de sociétaire ne doit pas contenir de caractères spéciaux";
                }
            }
        }

        if (!state.creationCompte.civilite.code) {
            errors.civilite = "Veuillez préciser votre civilité";
        }

        if (!state.creationCompte.informationsCommercialesEmail.code) {
            errors.informationsCommercialesEmail = "Veuillez préciser si vous souhaitez recevoir des informations commerciales des entités du groupe MACIF par e-mail";
        }

        if (!state.creationCompte.informationsCommercialesSms.code) {
            errors.informationsCommercialesSms = "Veuillez préciser si vous souhaitez recevoir des informations commerciales des entités du groupe MACIF par SMS";
        }

        if (!state.creationCompte.informationsCommercialesTelephone.code) {
            errors.informationsCommercialesTelephone = "Veuillez préciser si vous souhaitez recevoir des informations commerciales des entités du groupe MACIF par message vocal";
        }

        return errors;
    }
}