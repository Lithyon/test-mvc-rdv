import {SituationFamilialeModelView} from "./SituationFamilialeModelView";
import SituationFamiliale from "../../../../../Domain/Model/SituationFamiliale/SituationFamiliale";

export default class SituationFamilialeModelViewBuilder {
    static buildEmpty(): SituationFamilialeModelView {
        return {
            code: "",
            libelle: ""
        };
    }

    static buildFromSituationFamiliale(situationFamiliale: SituationFamiliale): SituationFamilialeModelView {
        return {
            code: situationFamiliale.state.code,
            libelle: situationFamiliale.state.libelle
        };
    }
}
