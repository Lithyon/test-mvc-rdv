import RendezVousModelView from "./RendezVousModelView";
import DisponibilitesModelViewBuilder from "../Disponibilites/DisponibilitesModelViewBuilder";
import RendezVousSelectionModelViewBuilder from "./RendezVousSelectionModelViewBuilder";

export default class RendezVousModelViewBuilder {
    // doit avoir en entrée un rendezvousModel => A CREER
    // il faut ensuite créer des modele t des builders si nécessaire pour chaque sous type. (on aura donc des prototype avec des state donc
    // pourra en partie réutiliser l'existant
    static buildFromSessionStorage(sessionState: string): RendezVousModelView {
        const _sessionState = JSON.parse(sessionState);
        return {
            ..._sessionState,
            rendezVous: RendezVousSelectionModelViewBuilder.buildFromSessionStorage(_sessionState.rendezVous),
            disponibilites: DisponibilitesModelViewBuilder.buildFromSessionStorage(_sessionState.disponibilites)
        };
    }
}