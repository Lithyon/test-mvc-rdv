import {DisponibilitesModelView} from "./DisponibilitesModelView";
import Disponibilites from "../../../../../Domain/Model/Disponibilites/Disponibilites";
import HeureDisponibleModelViewBuilder from "./HeureDisponibleModelViewBuilder";

export default class DisponibilitesModelViewBuilder {
    static buildFromDisponibilites(disponibilites: Disponibilites): DisponibilitesModelView {
        return {
            aucuneDisponibilite: disponibilites.state.aucuneDisponibilite,
            disponibilites: disponibilites.state.disponibilites.map(value => {
                return {
                    disponibilitesApresMidi: value.disponibilitesApresMidi.map(HeureDisponibleModelViewBuilder.buildHeureDispo),
                    disponibilitesMatin: value.disponibilitesMatin.map(HeureDisponibleModelViewBuilder.buildHeureDispo),
                    ferie: value.ferie,
                    jour: new Date(value.jour)
                }
            })
        }
    }

    static buildFromSessionStorage(disponibilites: any): DisponibilitesModelView {
        return {
            aucuneDisponibilite: disponibilites.aucuneDisponibilite,
            disponibilites: disponibilites.disponibilites.map((value: any) => {
                return {
                    disponibilitesApresMidi: value.disponibilitesApresMidi.map(HeureDisponibleModelViewBuilder.buildHeureDispo),
                    disponibilitesMatin: value.disponibilitesMatin.map(HeureDisponibleModelViewBuilder.buildHeureDispo),
                    ferie: value.ferie,
                    jour: new Date(value.jour)
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