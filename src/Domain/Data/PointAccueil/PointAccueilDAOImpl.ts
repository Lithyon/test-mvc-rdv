import PointAccueilDAO from "./PointAccueilDAO";
import PointAccueilEntity from "../API/Entity/PointAccueilEntity";
import {myFetch} from "../API/Commons/MyFetch";

const BASE_URL = "/internet-espaceclient-rest";

export default class PointAccueilDAOImpl
    implements PointAccueilDAO {
    async getPointAccueil(cdBuro: string): Promise<PointAccueilEntity> {
        const response = await myFetch<any>(
            `${BASE_URL}/unprotected/espace-client/pointaccueil/_lire_point_accueil?cdBuro=${cdBuro}`
        );

        const {data, messages} = await response.json();

        if (messages) {
            messages.map((error: any) => {
                throw new Error(error)
            });
        }

        return data;
    }
}
