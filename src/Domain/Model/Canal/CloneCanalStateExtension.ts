import Prototype from "../Commun/Prototype";
import CanalState from "./CanalState";

function cloneCanalState(): CanalState {
    return {
        code: this.code,
        libelle: this.libelle,
        isNew: this.isNew
    };
}

export function CloneCanalStateExtension(state: CanalState): Prototype<CanalState> {
    const prototype = state as any;

    prototype.clone = cloneCanalState.bind(prototype);

    return prototype;
}