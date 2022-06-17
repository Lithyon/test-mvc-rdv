import {
    InformationsCommercialesModelView
} from "../../../Presentation/pages/Authentification/ModelView/InformationsCommerciales/InformationsCommercialesModelView";

export enum InformationCommercialeCode {
    OUI = "OUI",
    NON = "NON"
}

export const DefaultInformationsCommerciales: Array<InformationsCommercialesModelView> = [
    {code: InformationCommercialeCode.OUI, libelle: "Oui"},
    {code: InformationCommercialeCode.NON, libelle: "Non"}
]