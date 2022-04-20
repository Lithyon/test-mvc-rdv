import Codification from "../Model/Codification";

export interface CodificationRepository {
  getCodifications(codification: string, filters?: Array<string>): Promise<Codification>;
}
