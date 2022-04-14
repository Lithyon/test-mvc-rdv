import PointAccueilDataSource from "../PointAccueilDataSource";
import { PointAccueilEntity } from "./Entity/PointAccueilAPIEntity";

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
