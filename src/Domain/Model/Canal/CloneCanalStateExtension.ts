import Prototype from "../Commun/Prototype";
import CanalState from "./CanalState";

function cloneCanalState(): CanalState {
    const that = this as CanalState;
    return {
        code: that.code,
        libelle: that.libelle,
        isNew: that.isNew
    };
}

export function CloneCanalStateExtension(state: CanalState): Prototype<CanalState> {
    const prototype = state as any;

    prototype.clone = cloneCanalState.bind(prototype);

    return prototype;
}
