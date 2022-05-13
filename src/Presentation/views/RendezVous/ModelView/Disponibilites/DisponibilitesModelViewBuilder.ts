import {DisponibilitesModelView} from "./DisponibilitesModelView";
import Disponibilites from "../../../../../Domain/Model/Disponibilites/Disponibilites";
import HeureDisponibleState from "../../../../../Domain/Model/Disponibilites/HeureDisponibleState";
import HeureDisponibleModelView from "./HeureDisponibleModelView";

export default class DisponibilitesModelViewBuilder {
    static buildHeureDispo(heureDispo: HeureDisponibleState): HeureDisponibleModelView {
        return {
            code: heureDispo.valeur.toString(),
            libelle: heureDispo.libelle
        }
    }

    static buildFromDisponibilites(disponibilites: Disponibilites): DisponibilitesModelView {
        return {
            aucuneDisponibilite: disponibilites.state.aucuneDisponibilite,
            disponibilites: disponibilites.state.disponibilites.map(value => {
                return {
                    disponibilitesApresMidi: value.disponibilitesApresMidi.map(DisponibilitesModelViewBuilder.buildHeureDispo),
                    disponibilitesMatin: value.disponibilitesMatin.map(DisponibilitesModelViewBuilder.buildHeureDispo),
                    ferie: value.ferie,
                    jour: value.jour
                }
            })
        }
    }

    static buildEmpty(): DisponibilitesModelView {
        return {
            aucuneDisponibilite: true,
            disponibilites: []
        };
    }
}