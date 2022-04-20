import CodificationDataSource from "../CodificationDataSource";
import { myFetch } from "./Commons/TypedResponse";
import { CodificationEntity } from "./Entity/CodificationAPIEntity";

const BASE_URL = "/fwk-codification-rest";

export default class CodificationAPIDataSourceImpl
  implements CodificationDataSource
{
  async getCodifications(codification: string): Promise<CodificationEntity> {
    const response = await myFetch<any>(
      `${BASE_URL}/codifications/nom/${codification}?code_cible=5&numero_structures=324&code_langue=fra&code_application=1880`
    );
    const { data, messages } = await response.json();
    // if (messages) {
    //   throw new Error("toto");
    // }
    return data;
  }
}
