import ChoixConnexionModelView from "./ChoixConnexionModelView";
import {ChoixConnexionCode} from "../../../../../Domain/Data/Enum/ChoixConnexion";

export default class ChoixConnexionModelViewBuilder {
    static buildEmpty(): ChoixConnexionModelView {
        return {
            code: "",
            libelle: ""
        };
    }

    static buildConnected(): ChoixConnexionModelView {
        return {
            code: ChoixConnexionCode.HAS_ACCOUNT,
            libelle: "Oui, j'ai un espace et je me connecte"
        };
    }
}
