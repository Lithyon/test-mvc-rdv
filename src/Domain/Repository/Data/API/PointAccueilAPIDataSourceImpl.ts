import PointAccueilDataSource from "../PointAccueilDataSource";
import { PointAccueilEntity } from "./Entity/PointAccueilAPIEntity";
import { myFetch } from "./Commons/TypedResponse";

const BASE_URL = "/internet-espaceclient-rest";

export default class PointAccueilAPIDataSourceImpl
  implements PointAccueilDataSource
{
  async getPointAccueil(cdBuro: string): Promise<PointAccueilEntity> {
    const response = await myFetch<any>(
      `${BASE_URL}/unprotected/espace-client/pointaccueil/_lire_point_accueil?cdBuro=${cdBuro}`
    );
    const { data, messages } = await response.json();
    // if (messages) {
    //   throw new Error("toto");
    // }
    return data;
  }
}
