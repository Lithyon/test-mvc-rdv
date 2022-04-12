export interface PointAccueilAPIEntity {
  data: {
    cdBuro: string;
    cdNatuVoie: string;
    cdNoVoie: string;
    cdPost: string;
    cdRegio: string;
    horairesOuvertureFermetures: HorairesOuvertureFermeture[];
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
    typeEquipementAccessibilites: TypeEquipementAccessibilite[];
    znLocalisSite: string;
  };
}

export interface HorairesOuvertureFermeture {
  cdJj: string;
  hrFermMatin: string;
  hrFermSoir: string;
  hrOuvMatin: string;
  hrOuvSoir: string;
  liJj: string;
}

export interface TypeEquipementAccessibilite {
  cdTyHandi: string;
  equipementAccessibilites: EquipementAccessibilite[];
  liTyHandi: string;
}

export interface EquipementAccessibilite {
  cdEqpHandi: string;
  liEqpHandi: string;
}
