import Prototype from "../Commun/Prototype";
import ProfessionState from "./ProfessionState";

function cloneProfessionState(): ProfessionState {
    return {
        code: this.code,
        libelle: this.libelle
    };
}

export function ProfessionStateExtension(state: ProfessionState): Prototype<ProfessionState> {
    const prototype = state as any;

    prototype.clone = cloneProfessionState.bind(prototype);

    return prototype;
}
