import PointAccueilDAO from "../../PointAccueilDAO";
import PointAccueilEntity from "../Entity/PointAccueilEntity";
import {myFetch} from "../Commons/MyFetch";

const BASE_URL = "/internet-espaceclient-rest";

export default class PointAccueilDAOImpl
    implements PointAccueilDAO {
    async getPointAccueil(cdBuro: string): Promise<PointAccueilEntity> {
        const response = await myFetch<any>(
            `${BASE_URL}/unprotected/espace-client/pointaccueil/_lire_point_accueil?cdBuro=${cdBuro}`
        );
        const {data, messages} = await response.json();
        // if (messages) {
        //   throw new Error("toto");
        // }
        return data;
    }
}
