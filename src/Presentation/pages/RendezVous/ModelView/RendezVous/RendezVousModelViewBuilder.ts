import RendezVousModelView from "./RendezVousModelView";
import DisponibilitesModelViewBuilder from "../Disponibilites/DisponibilitesModelViewBuilder";
import RendezVousSelectionModelViewBuilder from "./RendezVousSelectionModelViewBuilder";

export default class RendezVousModelViewBuilder {

    static buildFromSessionStorage(sessionState: RendezVousModelView): RendezVousModelView {
        return {
            ...sessionState,
            rendezVous: RendezVousSelectionModelViewBuilder.buildFromSessionStorage(sessionState.rendezVous),
            disponibilites: DisponibilitesModelViewBuilder.buildFromSessionStorage(sessionState.disponibilites)
        };
    }
}
