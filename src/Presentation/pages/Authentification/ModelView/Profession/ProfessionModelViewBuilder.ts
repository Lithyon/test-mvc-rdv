import {ProfessionModelView} from "./ProfessionModelView";
import Profession from "../../../../../Domain/Model/Profession/Profession";

export default class ProfessionModelViewBuilder {
    static buildEmpty(): ProfessionModelView {
        return {
            code: "",
            libelle: ""
        };
    }

    static buildFromProfession(profession: Profession): ProfessionModelView {
        return {
            code: profession.state.code,
            libelle: profession.state.libelle
        };
    }
}
