import {CiviliteModelView} from "../Civilite/CiviliteModelView";
import {BooleanChoiceModelView} from "../../../../commons/ModelView/BooleanChoice/BooleanChoiceModelView";

export interface CreationCompteModelView {
    readonly civilite: CiviliteModelView;
    readonly nom: string;
    readonly parrainageChoix: BooleanChoiceModelView;
    readonly informationsCommercialesEmail: BooleanChoiceModelView;
    readonly informationsCommercialesSms: BooleanChoiceModelView;
    readonly informationsCommercialesTelephone: BooleanChoiceModelView;
}