import EligibiliteEntity from "../API/Entity/EligibiliteEntity";
import EligibiliteDAO from "./EligibiliteDAO";
import {RequestMacif} from "../API/Commons/RequestMacif";

const BASE_URL = `${window.servicesRestBaseUrl || ""}/internet-rendezvous-rest`;

export default class EligibiliteDAOImpl implements EligibiliteDAO {
    async getEligibilites(cdBuro: string): Promise<EligibiliteEntity> {
        const response = await fetch(
            new RequestMacif(`${BASE_URL}/unprotected/v3/rendezvous/eligibilite?cdBuro=${cdBuro}`)
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
