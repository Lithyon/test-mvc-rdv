import Prototype from "../Commun/Prototype";
import CreationCompteState from "./CreationCompteState";

function cloneCreationCompteState(): CreationCompteState {
    const that = this as CreationCompteState;
    return {
        idCreationCompte: that.idCreationCompte
    };
}

export function CloneCreationCompteStateExtension(state: CreationCompteState): Prototype<CreationCompteState> {
    const prototype = state as any;

    prototype.clone = cloneCreationCompteState.bind(prototype);

    return prototype;
}
