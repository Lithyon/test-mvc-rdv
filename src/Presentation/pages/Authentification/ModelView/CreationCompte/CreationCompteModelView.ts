import {CiviliteModelView} from "../Civilite/CiviliteModelView";
import {BooleanChoiceModelView} from "../../../../commons/ModelView/BooleanChoice/BooleanChoiceModelView";
import {CommuneModelView} from "../Communes/CommuneModelView";

export interface CreationCompteModelView {
    readonly civilite: CiviliteModelView;
    readonly nom: string;
    readonly prenom: string;
    readonly numeroTelephone: string;
    readonly email: string;
    readonly parrainageChoix: BooleanChoiceModelView;
    readonly commune: CommuneModelView;
    readonly informationsCommercialesEmail: BooleanChoiceModelView;
    readonly informationsCommercialesSms: BooleanChoiceModelView;
    readonly informationsCommercialesTelephone: BooleanChoiceModelView;
}