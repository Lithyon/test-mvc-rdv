import CiviliteModelViewBuilder from "../Civilite/CiviliteModelViewBuilder";
import BooleanChoiceModelViewBuilder from "../../../../commons/ModelView/BooleanChoice/BooleanChoiceModelViewBuilder";
import CommuneModelViewBuilder from "../Communes/CommuneModelViewBuilder";

export default class CreationCompteModelViewBuilder {
    static buildEmpty() {
        return {
            civilite: CiviliteModelViewBuilder.buildEmpty(),
            nom: "",
            prenom: "",
            numeroTelephone: "",
            email: "",
            parrainageChoix: BooleanChoiceModelViewBuilder.buildEmpty(),
            commune: CommuneModelViewBuilder.buildEmpty(),
            informationsCommercialesEmail: BooleanChoiceModelViewBuilder.buildEmpty(),
            informationsCommercialesSms: BooleanChoiceModelViewBuilder.buildEmpty(),
            informationsCommercialesTelephone: BooleanChoiceModelViewBuilder.buildEmpty()
        };
    }
}