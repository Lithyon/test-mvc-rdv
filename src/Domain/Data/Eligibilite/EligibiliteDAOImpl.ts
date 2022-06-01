import {myFetch} from "../API/Commons/MyFetch";
import EligibiliteEntity from "../API/Entity/EligibiliteEntity";
import EligibiliteDAO from "./EligibiliteDAO";

export default class EligibiliteDAOImpl implements EligibiliteDAO {


    async getEligibilites(cdBuro: string): Promise<EligibiliteEntity> {
        const response = await myFetch<any>(
            `internet-rendezvous-rest/unprotected/v3/rendezvous/eligibilite?cdBuro=${cdBuro}`
        );

        const {data, messages} = await response.json();

        if (messages) {
            // TODO: IMPLEM GESTION D'ERREUR
            messages.map((error: any) => {
                throw new Error(error)
            });
        }

        return data;
    }
}
