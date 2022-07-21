import CiviliteModelViewBuilder from "../Civilite/CiviliteModelViewBuilder";
import BooleanChoiceModelViewBuilder from "../../../../commons/ModelView/BooleanChoice/BooleanChoiceModelViewBuilder";
import SituationFamilialeModelViewBuilder from "../SituationFamiliale/SituationFamilialeModelViewBuilder";
import CommuneModelViewBuilder from "../Commune/CommuneModelViewBuilder";

export default class CreationCompteModelViewBuilder {
    static buildEmpty() {
        return {
            civilite: CiviliteModelViewBuilder.buildEmpty(),
            nom: "",
            prenom: "",
            numeroTelephone: "",
            email: "",
            dateNaissance: new Date(0),
            situationFamiliale: SituationFamilialeModelViewBuilder.buildEmpty(),
            parrainageChoix: BooleanChoiceModelViewBuilder.buildEmpty(),
            commune: CommuneModelViewBuilder.buildEmpty(),
            informationsCommercialesEmail: BooleanChoiceModelViewBuilder.buildEmpty(),
            informationsCommercialesSms: BooleanChoiceModelViewBuilder.buildEmpty(),
            informationsCommercialesTelephone: BooleanChoiceModelViewBuilder.buildEmpty()
        };
    }
}
