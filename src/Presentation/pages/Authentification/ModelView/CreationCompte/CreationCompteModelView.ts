import {CiviliteModelView} from "../Civilite/CiviliteModelView";
import {BooleanChoiceModelView} from "../../../../commons/ModelView/BooleanChoice/BooleanChoiceModelView";
import {CommuneModelView} from "../Commune/CommuneModelView";
import {SituationFamilialeModelView} from "../SituationFamiliale/SituationFamilialeModelView";

export interface CreationCompteModelView {
    readonly civilite: CiviliteModelView;
    readonly nom: string;
    readonly prenom: string;
    readonly numeroTelephone: string;
    readonly email: string;
    readonly dateNaissance: Date;
    readonly situationFamiliale: SituationFamilialeModelView;
    readonly parrainageChoix: BooleanChoiceModelView;
    readonly commune: CommuneModelView;
    readonly informationsCommercialesEmail: BooleanChoiceModelView;
    readonly informationsCommercialesSms: BooleanChoiceModelView;
    readonly informationsCommercialesTelephone: BooleanChoiceModelView;
}
