import HorairesOuvertutreFermetureState from "./HorairesOuvertutreFermetureState";
import TypeEquipementAccessibiliteState from "./TypeEquipementAccessibiliteState";
import Cloneable from "./Clonable";

export default class PointAccueilState implements Cloneable<PointAccueilState> {
    cdBuro: string;
    cdNatuVoie: string;
    cdNoVoie: string;
    cdPost: string;
    cdRegio: string;
    horairesOuvertureFermetures: Array<HorairesOuvertutreFermetureState>;
    liBuro: string;
    liNatuVoie: string;
    liNoVoie: string;
    nmCommu: string;
    nmLieuDit: string;
    nmVoie: string;
    noAppart: string;
    noBat: string;
    noEntree: string;
    noEsca: string;
    noTeleLigne: string;
    noVoie: string;
    typeEquipementAccessibilites: Array<TypeEquipementAccessibiliteState>;
    znLocalisSite: string;


    constructor(cdBuro: string, cdNatuVoie: string, cdNoVoie: string, cdPost: string, cdRegio: string, horairesOuvertureFermetures: Array<HorairesOuvertutreFermetureState>, liBuro: string, liNatuVoie: string, liNoVoie: string, nmCommu: string, nmLieuDit: string, nmVoie: string, noAppart: string, noBat: string, noEntree: string, noEsca: string, noTeleLigne: string, noVoie: string, typeEquipementAccessibilites: Array<TypeEquipementAccessibiliteState>, znLocalisSite: string) {
        this.cdBuro = cdBuro;
        this.cdNatuVoie = cdNatuVoie;
        this.cdNoVoie = cdNoVoie;
        this.cdPost = cdPost;
        this.cdRegio = cdRegio;
        this.horairesOuvertureFermetures = horairesOuvertureFermetures;
        this.liBuro = liBuro;
        this.liNatuVoie = liNatuVoie;
        this.liNoVoie = liNoVoie;
        this.nmCommu = nmCommu;
        this.nmLieuDit = nmLieuDit;
        this.nmVoie = nmVoie;
        this.noAppart = noAppart;
        this.noBat = noBat;
        this.noEntree = noEntree;
        this.noEsca = noEsca;
        this.noTeleLigne = noTeleLigne;
        this.noVoie = noVoie;
        this.typeEquipementAccessibilites = typeEquipementAccessibilites;
        this.znLocalisSite = znLocalisSite;
    }

    clone(): PointAccueilState {
        return new PointAccueilState(
            this.cdBuro,
            this.cdNatuVoie,
            this.cdNoVoie,
            this.cdPost,
            this.cdRegio,
            this.horairesOuvertureFermetures,
            this.liBuro,
            this.liNatuVoie,
            this.liNoVoie,
            this.nmCommu,
            this.nmLieuDit,
            this.nmVoie,
            this.noAppart,
            this.noBat,
            this.noEntree,
            this.noEsca,
            this.noTeleLigne,
            this.noVoie,
            this.typeEquipementAccessibilites,
            this.znLocalisSite
        );
    }
}