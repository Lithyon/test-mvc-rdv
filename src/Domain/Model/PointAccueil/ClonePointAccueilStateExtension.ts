import Prototype from "../Commun/Prototype";
import PointAccueilState from "./PointAccueilState";

function clonePointAccueilState(): PointAccueilState {
    return {
        cdBuro: this.cdBuro,
        cdNatuVoie: this.cdNatuVoie,
        cdNoVoie: this.cdNoVoie,
        cdPost: this.cdPost,
        cdRegio: this.cdRegio,
        horairesOuvertureFermetures: this.horairesOuvertureFermetures,
        liBuro: this.liBuro,
        liNatuVoie: this.liNatuVoie,
        liNoVoie: this.liNoVoie,
        nmCommu: this.nmCommu,
        nmLieuDit: this.nmLieuDit,
        nmVoie: this.nmVoie,
        noAppart: this.noAppart,
        noBat: this.noBat,
        noEntree: this.noEntree,
        noEsca: this.noEsca,
        noTeleLigne: this.noTeleLigne,
        noVoie: this.noVoie,
        typeEquipementAccessibilites: this.typeEquipementAccessibilites,
        znLocalisSite: this.znLocalisSite
    };
}

export function ClonePointAccueilStateExtension(state: PointAccueilState): Prototype<PointAccueilState> {
    const prototype = state as any;

    prototype.clone = clonePointAccueilState.bind(prototype);

    return prototype;
}
