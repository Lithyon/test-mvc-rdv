import PointAccueilDataSource from "../PointAccueilDataSource";
import { PointAccueilAPIEntity } from "./Entity/PointAccueilAPIEntity";

const BASE_URL = "/internet-espaceclient-rest";

interface TypedResponse<T = any> extends Response {
  json<P = T>(): Promise<P>;
}

function myFetch<T>(...args: any): Promise<TypedResponse<T>> {
  return fetch.apply(window, args);
}

export default class PointAccueilAPIDataSourceImpl
  implements PointAccueilDataSource
{
  async getPointAccueil(cdBuro: string): Promise<PointAccueilAPIEntity> {
    const response = await myFetch<PointAccueilAPIEntity>(
      `${BASE_URL}/unprotected/espace-client/pointaccueil/_lire_point_accueil?cdBuro=${cdBuro}`
    );
    return await response.json();
  }
}
