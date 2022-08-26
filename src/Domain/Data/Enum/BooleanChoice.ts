import {BooleanChoiceModelView} from "../../../Presentation/commons/ModelView/BooleanChoice/BooleanChoiceModelView";

export enum BooleanChoiceCode {
    OUI = "O",
    NON = "N"
}

export const DefaultBooleanChoice: Array<BooleanChoiceModelView> = [
    {code: BooleanChoiceCode.OUI, libelle: "Oui"},
    {code: BooleanChoiceCode.NON, libelle: "Non"}
];
