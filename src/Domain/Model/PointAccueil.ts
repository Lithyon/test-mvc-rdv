export interface AdressePointAccueil {
  noVoie: string;
  typeVoie: string;
  nomVoie: string;
  codePostal: string;
  commune: string;
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

export interface PointAccueilEtat {
  readonly cdBuro: string;
  readonly cdNatuVoie: string;
  readonly cdNoVoie: string;
  readonly cdPost: string;
  readonly cdRegio: string;
  readonly horairesOuvertureFermetures: HorairesOuvertureFermeture[];
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
  readonly typeEquipementAccessibilites: TypeEquipementAccessibilite[];
  readonly znLocalisSite: string;
}

export default class PointAccueil {
  constructor(readonly etat: PointAccueilEtat) {}
}
