import Prototype from "../Commun/Prototype";
import IdentiteState from "./IdentiteState";

function cloneIdentiteState(): IdentiteState {
    const that = this as IdentiteState;
    return {
        dtDerniereConnexion: that.dtDerniereConnexion,
        dtNaisPers: that.dtNaisPers,
        identiteCompte: that.identiteCompte,
        identiteMacif: that.identiteMacif,
        identiteMutavieAssuranceVie: that.identiteMutavieAssuranceVie,
        identiteSanteCollective: that.identiteSanteCollective,
        identiteSanteIndividuelle: that.identiteSanteIndividuelle,
        inConnueMacif: that.inConnueMacif,
        inConnueSanteCollective: that.inConnueSanteCollective,
        inConnueSanteIndividuelle: that.inConnueSanteIndividuelle,
        inSISanteCollectiveAccessible: that.inSISanteCollectiveAccessible,
        inSISanteIndividuelleAccessible: that.inSISanteIndividuelleAccessible,
        nmPers: that.nmPers,
        noInternet: that.noInternet,
        znPrenPers: that.znPrenPers
    };
}

export function CloneIdentiteStateExtension(state: IdentiteState): Prototype<IdentiteState> {
    const prototype = state as any;

    prototype.clone = cloneIdentiteState.bind(prototype);

    return prototype;
}
