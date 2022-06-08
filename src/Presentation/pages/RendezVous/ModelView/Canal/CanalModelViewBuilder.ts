import Canal from "../../../../../Domain/Model/Canal/Canal";
import CanalModelView from "./CanalModelView";
import {CanalCode} from "../../../../../Domain/Data/Enum/Canal";

export default class CanalModelViewBuilder {
    static buildFromCanal(canal: Canal): CanalModelView {
        let canalModelView: CanalModelView = {
            libelle: canal.state.libelle,
            code: canal.state.code,
        };
        if (canal.state.isNew) {
            canalModelView.isNew = canal.state.isNew;
        }
        return canalModelView;
    }

    static buildEmpty() {
        return {
            code: "",
            libelle: ""
        };
    }
}