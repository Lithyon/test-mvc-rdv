import { DemandeEntity } from "./API/Entity/DemandeAPIEntity";

export default interface DemandeDataSource {
  getDemandes(): Promise<DemandeEntity>;
}
