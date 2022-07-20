import HorairesOuvertutreFermetureState from "./HorairesOuvertutreFermetureState";
import TypeEquipementAccessibiliteState from "./TypeEquipementAccessibiliteState";

export default interface PointAccueilState {
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
}
