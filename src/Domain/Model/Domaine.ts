import Codification, { CodificationEtat } from "./Codification";

export interface DomaineEtat extends CodificationEtat {}

export default class Domaine extends Codification<DomaineEtat> {}