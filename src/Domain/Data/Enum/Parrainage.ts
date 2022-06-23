import {ParrainageChoixModelView} from "../../../Presentation/pages/Authentification/ModelView/Parrainage/ParrainageChoixModelView";

export enum ParrainageCode {
    OUI = "OUI",
    NON = "NON"
}

export const DefautParrainageChoix: Array<ParrainageChoixModelView> = [
    {code: ParrainageCode.OUI, libelle: "Oui"},
    {code: ParrainageCode.NON, libelle: "Non"},
]