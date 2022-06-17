import {CiviliteModelView} from "../../../Presentation/pages/Authentification/ModelView/Civilite/CiviliteModelView";

export enum CiviliteCode {
    MONSIEUR = "MONSIEUR",
    MADAME = "MADAME"
}

export const DefaultCivilite: Array<CiviliteModelView> = [
    {code: CiviliteCode.MADAME, libelle: "Madame"},
    {code: CiviliteCode.MONSIEUR, libelle: "Monsieur"}
];