import Domaine from "../Model/Domaine";

export interface DomaineRepository {
  getDomaines(): Promise<Domaine>;
}
