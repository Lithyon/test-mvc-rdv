import Prototype from "../Commun/Prototype";
import CommunesRequestState from "./CommunesRequestState";

function cloneCommunesRequestState(): CommunesRequestState {
    const that = this as CommunesRequestState;
    return {
        rechercheCommune: that.rechercheCommune,
        pageSize: that.pageSize,
        lieuDit: that.lieuDit,
        ancienNom: that.ancienNom
    };
}

export function CloneCommunesRequestStateExtension(state: CommunesRequestState): Prototype<CommunesRequestState> {
    const prototype = state as any;

    prototype.clone = cloneCommunesRequestState.bind(prototype);

    return prototype;
}
