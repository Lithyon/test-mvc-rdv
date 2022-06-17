import {InformationCommercialeCode} from "../../../../../Domain/Data/Enum/InformationsCommerciales";

export interface InformationsCommercialesModelView {
    readonly code: InformationCommercialeCode | string;
    readonly libelle: string;
}