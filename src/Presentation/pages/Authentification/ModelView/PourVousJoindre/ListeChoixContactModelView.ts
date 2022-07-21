import {ChoixContactModelView} from "./ChoixContactModelView";

export interface ListeChoixContactModelView {
    readonly listeEmails: Array<ChoixContactModelView>;
    readonly listeNumerosTelephones: Array<ChoixContactModelView>;
}
