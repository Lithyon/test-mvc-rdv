import {ICodification} from "../../../Domain/Model/Codification";
import CodificationModelView from "./CodificationModelView";

export default class CodificationModelViewBuilder {
    static buildFromCodification(codification: ICodification): CodificationModelView {
        return {
            code: codification.code,
            libelle: codification.libelle,
        };
    }

    static buildEmpty(): CodificationModelView {
        return {
            code: "",
            libelle: "",
        };
    }
}