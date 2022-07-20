import Canal from "../../../../../Domain/Model/Canal/Canal";
import CanalModelView from "./CanalModelView";

export default class CanalModelViewBuilder {
    static buildFromCanal(canal: Canal): CanalModelView {
        const canalModelView: CanalModelView = {
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
