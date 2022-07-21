import {CreationCompteModelView} from "../../Presentation/pages/Authentification/ModelView/CreationCompte/CreationCompteModelView";
import CreationCompteRequest from "../Model/CreationCompte/CreationCompteRequest";

export function buildCreationCompteRequest(creationCompte: CreationCompteModelView) {
    return new CreationCompteRequest({
        cdCivil: creationCompte.civilite.code,
        nmPers: creationCompte.nom,
        znPrenPers: creationCompte.prenom,
        informationMacifMail: creationCompte.informationsCommercialesEmail.code === "O",
        informationMacifMessageVocal: creationCompte.informationsCommercialesTelephone.code === "O",
        informationMacifSms: creationCompte.informationsCommercialesSms.code === "O"
    });
}