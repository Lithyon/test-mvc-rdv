import Prototype from "../Commun/Prototype";
import CommunesRequestState from "./CommunesRequestState";

function cloneCommunesRequestState(): CommunesRequestState {
    return {
        rechercheCommune: this.rechercheCommune,
        pageSize: this.pageSize,
        lieuDit: this.lieuDit,
        ancienNom: this.ancienNom,
    };
}

export function CloneCommunesRequestStateExtension(state: CommunesRequestState): Prototype<CommunesRequestState> {
    const prototype = state as any;

    prototype.clone = cloneCommunesRequestState.bind(prototype);

    return prototype;
}