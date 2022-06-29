import Prototype from "../Commun/Prototype";
import CreationCompteState from "./CreationCompteState";

function cloneCreationCompteState(): CreationCompteState {
    return {
        listeRejets: this.listeRejets
    };
}

export function CloneCreationCompteStateExtension(state: CreationCompteState): Prototype<CreationCompteState> {
    const prototype = state as any;

    prototype.clone = cloneCreationCompteState.bind(prototype);

    return prototype;
}