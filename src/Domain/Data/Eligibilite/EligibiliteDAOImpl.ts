import EligibiliteEntity from "../API/Entity/EligibiliteEntity";
import EligibiliteDAO from "./EligibiliteDAO";
import {RequestBuilder} from "../API/Commons/RequestBuilder";
import {ResponseEntity} from "../API/Entity/ResponseEntity";

const BASE_URL = `${window.servicesRestBaseUrl || ""}/internet-rendezvous-rest`;

export default class EligibiliteDAOImpl implements EligibiliteDAO {
    async getEligibilites(cdBuro: string): Promise<EligibiliteEntity> {
        const {data, messages} = await RequestBuilder
            .get<ResponseEntity<EligibiliteEntity>>(`${BASE_URL}/unprotected/v3/rendezvous/eligibilite?cdBuro=${cdBuro}`)
            .fetchJson();

        if (messages) {
            messages.forEach((error: string) => {
                throw new Error(error);
            });
        }

        return data;
    }
}
