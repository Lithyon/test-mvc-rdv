import DomaineDataSource from "../DomaineDataSource";
import { myFetch } from "./Commons/TypedResponse";
import { DomaineEntity } from "./Entity/DomaineAPIEntity";

const BASE_URL = "/fwk-codification-rest";

export default class DomaineAPIDataSourceImpl implements DomaineDataSource {
  async getDomaines(): Promise<DomaineEntity> {
    const response = await myFetch<any>(
      `${BASE_URL}/codifications/nom/CD_DOMAINE_DEMAND?code_cible=5&numero_structures=324&code_langue=fra&code_application=1880`
    );
    const { data, messages } = await response.json();
    // if (messages) {
    //   throw new Error("toto");
    // }
    return data;
  }
}
