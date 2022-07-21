import {ChoixContactModelView} from "./ChoixContactModelView";

export default class ChoixContactModelViewBuilder {
    static buildEmpty(): ChoixContactModelView {
        return {
            code: "",
            libelle: ""
        };
    }
}
