import Domaine from "../../../../../Domain/Model/Domaine/Domaine";
import DomaineModelView from "./DomaineModelView";

export default class DomaineModelViewBuilder {
    static buildFromDomaine(domaine: Domaine): DomaineModelView {
        return {
            code: domaine.state.code,
            libelle: domaine.state.libelle,
        };
    }

    static buildEmpty(): DomaineModelView {
        return {
            code: "",
            libelle: "",
        };
    }
}