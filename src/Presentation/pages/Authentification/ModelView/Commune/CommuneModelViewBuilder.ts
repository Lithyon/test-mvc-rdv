import Commune from "../../../../../Domain/Model/Commune/Commune";
import {CommuneModelView} from "./CommuneModelView";

export default class CommuneModelViewBuilder {
    static buildFromCommune(commune: Commune): CommuneModelView {
        return {
            codePostal: commune.state.codePostal,
            ancienNom: commune.state.ancienNom,
            lieuDit: commune.state.lieuDit,
            nom: commune.state.nom,
            nomAcheminement: commune.state.nomAcheminement
        };
    }

    static buildEmpty() {
        return {
            nom: "",
            codePostal: "",
            lieuDit: false,
            nomAcheminement: "",
            ancienNom: ""
        }
    }
}