import { DomaineEntity } from "./API/Entity/DomaineAPIEntity";

export default interface DomaineDataSource {
  getDomaines(): Promise<DomaineEntity>;
}