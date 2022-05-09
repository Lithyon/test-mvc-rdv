import HorairesOuvertureFermetureEntity from "./HorairesOuvertureFermetureEntity";
import TypeEquipementAccessibiliteEntity from "./TypeEquipementAccessibiliteEntity";

export default interface PointAccueilEntity {
    cdBuro: string;
    cdNatuVoie: string;
    cdNoVoie: string;
    cdPost: string;
    cdRegio: string;
    horairesOuvertureFermetures: HorairesOuvertureFermetureEntity[];
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
    typeEquipementAccessibilites: TypeEquipementAccessibiliteEntity[];
    znLocalisSite: string;
}
