import {ChoixContactModelView} from "./ChoixContactModelView";
import {ListeChoixContactModelView} from "./ListeChoixContactModelView";

export interface PourVousJoindreModelView {
    readonly choixContact: ChoixContactModelView;
    readonly listeChoixContacts: ListeChoixContactModelView;
    readonly noTel: string;
    readonly adresseMail: string;
}
