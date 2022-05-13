import Prototype from "../Commun/Prototype";
import RendezVousState from "./RendezVousState";

function cloneRendezVousState(): RendezVousState {
    return {
        listeRejets: this.listeRejets
    };
}

export function CloneRendezVousStateExtension(state: RendezVousState): Prototype<RendezVousState> {
    const prototype = state as any;

    prototype.clone = cloneRendezVousState.bind(prototype);

    return prototype;
}