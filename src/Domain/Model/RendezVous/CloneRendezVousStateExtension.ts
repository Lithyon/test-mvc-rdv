import Prototype from "../Commun/Prototype";
import RendezVousState from "./RendezVousState";

function cloneRendezVousState(): RendezVousState {
    const that = this as RendezVousState;
    return {
        listeRejets: that.listeRejets
    };
}

export function CloneRendezVousStateExtension(state: RendezVousState): Prototype<RendezVousState> {
    const prototype = state as any;

    prototype.clone = cloneRendezVousState.bind(prototype);

    return prototype;
}
