import HorairesOuvertureFermetureEntity from "./HorairesOuvertureFermetureEntity";
import TypeEquipementAccessibiliteEntity from "./TypeEquipementAccessibiliteEntity";

export default interface PointAccueilEntity {
    readonly cdBuro: string;
    readonly cdNatuVoie: string;
    readonly cdNoVoie: string;
    readonly cdPost: string;
    readonly cdRegio: string;
    readonly horairesOuvertureFermetures: HorairesOuvertureFermetureEntity[];
    readonly liBuro: string;
    readonly liNatuVoie: string;
    readonly liNoVoie: string;
    readonly nmCommu: string;
    readonly nmLieuDit: string;
    readonly nmVoie: string;
    readonly noAppart: string;
    readonly noBat: string;
    readonly noEntree: string;
    readonly noEsca: string;
    readonly noTeleLigne: string;
    readonly noVoie: string;
    readonly typeEquipementAccessibilites: TypeEquipementAccessibiliteEntity[];
    readonly znLocalisSite: string;
}
