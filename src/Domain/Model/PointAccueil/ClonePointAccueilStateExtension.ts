import Prototype from "../Commun/Prototype";
import PointAccueilState from "./PointAccueilState";

function clonePointAccueilState(): PointAccueilState {
    const that = this as PointAccueilState;
    return {
        cdBuro: that.cdBuro,
        cdNatuVoie: that.cdNatuVoie,
        cdNoVoie: that.cdNoVoie,
        cdPost: that.cdPost,
        cdRegio: that.cdRegio,
        horairesOuvertureFermetures: that.horairesOuvertureFermetures,
        liBuro: that.liBuro,
        liNatuVoie: that.liNatuVoie,
        liNoVoie: that.liNoVoie,
        nmCommu: that.nmCommu,
        nmLieuDit: that.nmLieuDit,
        nmVoie: that.nmVoie,
        noAppart: that.noAppart,
        noBat: that.noBat,
        noEntree: that.noEntree,
        noEsca: that.noEsca,
        noTeleLigne: that.noTeleLigne,
        noVoie: that.noVoie,
        typeEquipementAccessibilites: that.typeEquipementAccessibilites,
        znLocalisSite: that.znLocalisSite
    };
}

export function ClonePointAccueilStateExtension(state: PointAccueilState): Prototype<PointAccueilState> {
    const prototype = state as any;

    prototype.clone = clonePointAccueilState.bind(prototype);

    return prototype;
}
