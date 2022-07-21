import {CiviliteModelView} from "../../../Presentation/pages/Authentification/ModelView/Civilite/CiviliteModelView";

export enum CiviliteCode {
    MONSIEUR = "2",
    MADAME = "1"
}

export const DefaultCivilite: Array<CiviliteModelView> = [
    {code: CiviliteCode.MADAME, libelle: "Madame"},
    {code: CiviliteCode.MONSIEUR, libelle: "Monsieur"}
];
