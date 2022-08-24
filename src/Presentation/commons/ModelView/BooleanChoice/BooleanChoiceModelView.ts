import {BooleanChoiceCode} from "../../../../Domain/Data/Enum/BooleanChoice";

export interface BooleanChoiceModelView {
    readonly code: BooleanChoiceCode | string;
    readonly libelle: string;
}
