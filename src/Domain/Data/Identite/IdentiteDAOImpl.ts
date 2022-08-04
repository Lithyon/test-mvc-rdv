import IdentiteDAO from "./IdentiteDAO";
import {RequestBuilder} from "../API/Commons/RequestBuilder";
import {ResponseEntity} from "../API/Entity/ResponseEntity";
import IdentiteEntity from "../API/Entity/IdentiteEntity";

const BASE_URL = `${window.servicesRestBaseUrl || ""}/internet-personne-rest`;

export default class IdentiteDAOImpl implements IdentiteDAO {
    async getIdentite(): Promise<IdentiteEntity> {
        const {data, messages} = await RequestBuilder
            .get<ResponseEntity<IdentiteEntity>>(`${BASE_URL}/personnes/identite`)
            .fetchJson();

        if (messages) {
            messages.forEach((error: string) => {
                throw new Error(error);
            });
        }

        return data;
    }
}
