export interface CodificationEtat {
  readonly code: string;
  readonly libelle: string;
}

export default class Codification<T> {
  constructor(readonly etat: Array<T>) {}
}
