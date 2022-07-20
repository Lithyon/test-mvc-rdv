import HeureDisponibleState from "../../../../../Domain/Model/Disponibilites/HeureDisponibleState";
import HeureDisponibleModelView from "./HeureDisponibleModelView";

export default class HeureDisponibleModelViewBuilder {
    static buildHeureDispo(heureDispo: HeureDisponibleState): HeureDisponibleModelView {
        return {
            code: heureDispo.valeur,
            libelle: heureDispo.libelle
        };
    }

    static buildEmpty(): HeureDisponibleModelView {
        return {
            code: 0,
            libelle: ""
        };
    }
}
