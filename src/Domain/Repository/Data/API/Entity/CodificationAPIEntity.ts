export interface CodificationEntity {
  codes: Code[];
  nomCodification: string;
}

export interface Code {
  code: string;
  libelle: string;
}
