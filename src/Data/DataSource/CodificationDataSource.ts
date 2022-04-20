import { CodificationEntity } from "./API/Entity/CodificationAPIEntity";

export default interface CodificationDataSource {
  getCodifications(codification: string): Promise<CodificationEntity>;
}
