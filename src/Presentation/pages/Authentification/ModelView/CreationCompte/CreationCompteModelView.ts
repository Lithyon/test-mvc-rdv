import {CiviliteModelView} from "../Civilite/CiviliteModelView";
import {ParrainageNumeroSocietaireModelView} from "../Parrainage/ParrainageNumeroSocietaireModelView";
import {BooleanChoiceModelView} from "../../../../commons/ModelView/BooleanChoice/BooleanChoiceModelView";

export interface CreationCompteModelView {
    readonly civilite: CiviliteModelView;
    readonly parrainageChoix: BooleanChoiceModelView;
    readonly parrainageNumeroSocietaire: ParrainageNumeroSocietaireModelView;
    readonly informationsCommercialesEmail: BooleanChoiceModelView;
    readonly informationsCommercialesSms: BooleanChoiceModelView;
    readonly informationsCommercialesTelephone: BooleanChoiceModelView;
}