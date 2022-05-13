import DemandeState from "./DemandeState";
import Prototype from "../Commun/Prototype";

function cloneDemandeState(): DemandeState {
    const that = this as DemandeState;
    return {
        code: that.code,
        libelle: that.libelle
    };
}

export function CloneDemandeStateExtension(state: DemandeState): Prototype<DemandeState> {
    const prototype = state as any;

    prototype.clone = cloneDemandeState.bind(prototype);

    return prototype;
}