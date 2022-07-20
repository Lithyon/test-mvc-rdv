import ChoixConnexionModelView from "./ChoixConnexionModelView";

export default class ChoixConnexionModelViewBuilder {
    static buildEmpty(): ChoixConnexionModelView {
        return {
            code: "",
            libelle: ""
        };
    }
}
