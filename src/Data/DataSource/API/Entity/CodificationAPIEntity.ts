export interface CodificationEntity {
  codes: Code[];
  nomCodification: string;
}

export interface Code {
  affichable: boolean;
  code: string;
  complements: Complements;
  dateDebutValidite: Date;
  dateFinValidite: Date;
  libelle: string;
  libelleLong: string;
  noOrdreAffichage: number;
  nomCodification: string;
}

export interface Complements {
  additionalProp1: string[];
  additionalProp2: string[];
  additionalProp3: string[];
}
