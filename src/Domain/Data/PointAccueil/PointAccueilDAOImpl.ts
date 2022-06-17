import PointAccueilDAO from "./PointAccueilDAO";
import PointAccueilEntity from "../API/Entity/PointAccueilEntity";
import {RequestMacif} from "../API/Commons/RequestMacif";

const BASE_URL = `${window.servicesRestBaseUrl || ""}/internet-espaceclient-rest`;

export default class PointAccueilDAOImpl
    implements PointAccueilDAO {
    async getPointAccueil(cdBuro: string): Promise<PointAccueilEntity> {
        const response = await fetch(
            new RequestMacif(`${BASE_URL}/unprotected/espace-client/pointaccueil/_lire_point_accueil?cdBuro=${cdBuro}`)
        )

        const {data, messages} = await response.json();

        if (messages) {
            messages.map((error: any) => {
                throw new Error(error)
            });
        }

        return data;
    }
}
