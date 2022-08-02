import Prototype from "../Commun/Prototype";
import SituationFamilialeState from "./SituationFamilialeState";

function cloneSituationFamilialeState(): SituationFamilialeState {
    const that = this as SituationFamilialeState;
    return {
        code: that.code,
        libelle: that.libelle
    };
}

export function CloneSituationFamilialeStateExtension(state: SituationFamilialeState): Prototype<SituationFamilialeState> {
    const prototype = state as any;

    prototype.clone = cloneSituationFamilialeState.bind(prototype);

    return prototype;
}
