import Codification, { CodificationEtat } from "./Codification";

export interface DemandeEtat extends CodificationEtat {}

export default class Demande extends Codification<DemandeEtat> {}