import {CiviliteCode} from "../../../../../Domain/Data/Enum/DefaultCivilite";

export interface CiviliteModelView {
    readonly code: CiviliteCode | string;
    readonly libelle: string;
}