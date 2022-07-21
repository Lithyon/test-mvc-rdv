import PointAccueilDAO from "./PointAccueilDAO";
import PointAccueilEntity from "../API/Entity/PointAccueilEntity";
import {RequestBuilder} from "../API/Commons/RequestBuilder";
import {ResponseEntity} from "../API/Entity/ResponseEntity";

const BASE_URL = `${window.servicesRestBaseUrl || ""}/internet-espaceclient-rest`;

export default class PointAccueilDAOImpl
    implements PointAccueilDAO {
    async getPointAccueil(cdBuro: string): Promise<PointAccueilEntity> {
        const {data, messages} = await RequestBuilder
            .get<ResponseEntity<PointAccueilEntity>>(`${BASE_URL}/unprotected/espace-client/pointaccueil/_lire_point_accueil?cdBuro=${cdBuro}`)
            .fetchJson();

        if (messages) {
            messages.forEach((error: string) => {
                throw new Error(error);
            });
        }

        return data;
    }
}
