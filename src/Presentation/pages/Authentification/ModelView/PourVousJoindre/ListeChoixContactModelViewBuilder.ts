import {ListeChoixContactModelView} from "./ListeChoixContactModelView";
import ContactModelView from "../Contact/ContactModelView";
import {AutreChoixCode} from "../../../../../Domain/Data/Enum/AutreChoix";

export default class ListeChoixContactModelViewBuilder {
    static buildEmpty(): ListeChoixContactModelView {
        return {
            listeEmails: [],
            listeNumerosTelephones: []
        };
    }

    static buildFromListeChoixContact(infosContact: ContactModelView): ListeChoixContactModelView {
        const listeEmails = [
            {
                code: infosContact.email,
                libelle: infosContact.email
            },
            {
                code: AutreChoixCode.MAIL,
                libelle: "Utiliser une autre adresse e-mail"
            }
        ];

        const listeNumerosTelephones = infosContact.telephones.map(
            telephone => ({code: telephone, libelle: telephone})
        );
        listeNumerosTelephones.push({
            code: AutreChoixCode.TELEPHONE,
            libelle: "Utiliser un autre numéro de téléphone"
        });

        return {
            listeEmails,
            listeNumerosTelephones
        };
    }
}
