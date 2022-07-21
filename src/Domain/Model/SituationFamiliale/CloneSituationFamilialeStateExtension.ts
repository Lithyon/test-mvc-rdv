import Prototype from "../Commun/Prototype";
import SituationFamilialeState from "./SituationFamilialeState";

function cloneSituationFamilialeState(): SituationFamilialeState {
    return {
        code: this.code,
        libelle: this.libelle
    };
}

export function CloneSituationFamilialeStateExtension(state: SituationFamilialeState): Prototype<SituationFamilialeState> {
    const prototype = state as any;

    prototype.clone = cloneSituationFamilialeState.bind(prototype);

    return prototype;
}
