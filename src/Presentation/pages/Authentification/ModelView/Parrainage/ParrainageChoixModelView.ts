import {ParrainageCode} from "../../../../../Domain/Data/Enum/Parrainage";

export interface ParrainageChoixModelView {
    readonly code: ParrainageCode | string;
    readonly libelle: string;
}