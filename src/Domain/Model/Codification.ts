export interface CodificationEtat extends Code {}

export interface Code {
  code: string;
  libelle: string;
}

export default class Codification {
  constructor(readonly etat: CodificationEtat[]) {}
}