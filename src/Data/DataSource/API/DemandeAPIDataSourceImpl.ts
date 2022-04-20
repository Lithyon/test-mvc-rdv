import DemandeDataSource from "../DemandeDataSource";
import { myFetch } from "./Commons/TypedResponse";
import { DemandeEntity } from "./Entity/DemandeAPIEntity";

const BASE_URL = "/fwk-codification-rest";

export default class DemandeAPIDataSourceImpl implements DemandeDataSource {
  async getDemandes(): Promise<DemandeEntity> {
    const response = await myFetch<any>(
      `${BASE_URL}/codifications/nom/CD_TY_DEMAND_CLIENT?code_cible=5&numero_structures=324&code_langue=fra&code_application=1880`
    );
    const { data, messages } = await response.json();
    // if (messages) {
    //   throw new Error("toto");
    // }
    return data;
  }
}
