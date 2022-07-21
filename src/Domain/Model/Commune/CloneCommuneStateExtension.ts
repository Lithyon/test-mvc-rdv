import Prototype from "../Commun/Prototype";
import CommuneState from "./CommuneState";

function cloneCommuneState(): CommuneState {
    const that = this as CommuneState;

    return {
        codeInsee: that.codeInsee,
        codePostal: that.codePostal,
        ancienNom: that.ancienNom,
        departement: that.departement,
        id: that.id,
        lieuDit: that.lieuDit,
        nom: that.nom,
        nomAcheminement: that.nomAcheminement,
        pays: that.pays
    };
}

export function CloneCommuneStateExtension(state: CommuneState): Prototype<CommuneState> {
    const prototype = state as any;

    prototype.clone = cloneCommuneState.bind(prototype);

    return prototype;
}
