import Prototype from "../Commun/Prototype";
import CommunesState from "./CommunesState";

function cloneCommunesState(): CommunesState {
    return {
        communes: this.communes
    };
}

export function CloneCommunesStateExtension(state: CommunesState): Prototype<CommunesState> {
    const prototype = state as any;

    prototype.clone = cloneCommunesState.bind(prototype);

    return prototype;
}