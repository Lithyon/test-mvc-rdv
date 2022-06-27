import CiviliteModelViewBuilder from "../Civilite/CiviliteModelViewBuilder";
import ParrainageNumeroSocietaireModelViewBuilder from "../Parrainage/ParrainageNumeroSocietaireModelViewBuilder";
import BooleanChoiceModelViewBuilder from "../../../../commons/ModelView/BooleanChoice/BooleanChoiceModelViewBuilder";

export default class CreationCompteModelViewBuilder {
    static buildEmpty() {
        return {
            civilite: CiviliteModelViewBuilder.buildEmpty(),
            parrainageChoix: BooleanChoiceModelViewBuilder.buildEmpty(),
            parrainageNumeroSocietaire: ParrainageNumeroSocietaireModelViewBuilder.buildEmpty(),
            informationsCommercialesEmail: BooleanChoiceModelViewBuilder.buildEmpty(),
            informationsCommercialesSms: BooleanChoiceModelViewBuilder.buildEmpty(),
            informationsCommercialesTelephone: BooleanChoiceModelViewBuilder.buildEmpty(),
        }
    }
}