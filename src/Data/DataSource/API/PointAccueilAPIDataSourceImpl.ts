import { PointAccueil } from "../../../Domain/Model/PointAccueil";
import PointAccueilDataSource from "../PointAccueilDataSource";
import { PointAccueilAPIEntity } from "./Entity/PointAccueilAPIEntity";

const BASE_URL = "/internet-espaceclient-rest";

interface TypedResponse<T = any> extends Response {
  json<P = T>(): Promise<P>;
}

function myFetch<T>(...args: any): Promise<TypedResponse<T>> {
  return fetch.apply(window, args);
}

export default class PointAccueilAPIDataSourceImpl implements PointAccueilDataSource {
  async getPointAccueil(cdBuro: string): Promise<PointAccueil> {
    const response = await myFetch<PointAccueilAPIEntity>(
      `${BASE_URL}/unprotected/espace-client/pointaccueil/_lire_point_accueil?cdBuro=${cdBuro}`
    );
    const { data } = await response.json();
    return {
      cdBuro: data.cdBuro,
      nomPointAccueil: data.liBuro,
      telPointAccueil: data.noTeleLigne,
      adressePointAccueil: {
        noVoie: data.noVoie,
        typeVoie: data.liNatuVoie,
        nomVoie: data.nmVoie,
        codePostal: data.cdPost,
        commune: data.nmCommu,
      },
      srcImgPointAccueil: `https://www.macif.fr/files/live/sites/maciffr/files/maciffr/NousContacter/pa_${data.cdBuro}.jpg`,
      urlPointAccueil: `https://agence.macif.fr/assurance/proxy.asp?agenceid=${data.cdBuro}`,
      horairesOuvertureFermetures: data.horairesOuvertureFermetures,
    };
  }
}
