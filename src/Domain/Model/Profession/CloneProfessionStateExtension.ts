import Prototype from "../Commun/Prototype";
import ProfessionState from "./ProfessionState";

function cloneProfessionState(): ProfessionState {
    const that = this as ProfessionState;
    return {
        code: that.code,
        libelle: that.libelle
    };
}

export function CloneProfessionStateExtension(state: ProfessionState): Prototype<ProfessionState> {
    const prototype = state as any;

    prototype.clone = cloneProfessionState.bind(prototype);

    return prototype;
}
