import {PourVousJoindreModelView} from "./PourVousJoindreModelView";
import ChoixContactModelViewBuilder from "./ChoixContactModelViewBuilder";
import ContactModelView from "../Contact/ContactModelView";
import ListeChoixContactModelViewBuilder from "./ListeChoixContactModelViewBuilder";

export default class PourVousJoindreModelViewBuilder {
    static buildEmpty(): PourVousJoindreModelView {
        return {
            listeChoixContacts: ListeChoixContactModelViewBuilder.buildEmpty(),
            choixContact: ChoixContactModelViewBuilder.buildEmpty(),
            noTel: "",
            adresseMail: ""
        };
    }

    static buildFromPourVousJoindre(infosContact: ContactModelView): PourVousJoindreModelView {
        return {
            listeChoixContacts: ListeChoixContactModelViewBuilder.buildFromListeChoixContact(infosContact),
            choixContact: ChoixContactModelViewBuilder.buildEmpty(),
            noTel: "",
            adresseMail: ""
        };
    }
}
