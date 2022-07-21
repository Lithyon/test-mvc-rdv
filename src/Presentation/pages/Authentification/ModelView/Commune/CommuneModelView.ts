import {DepartementModelView} from "./DepartementModelView";

export interface CommuneModelView {
    readonly nom: string;
    readonly codePostal: string;
    readonly lieuDit: boolean;
    readonly nomAcheminement: string;
    readonly ancienNom: string;
    readonly codeInsee: string;
    readonly departement: DepartementModelView;
    readonly pays: string;
}
