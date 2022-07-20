import DemandeDAO from "./DemandeDAO";
import DemandeEntity from "../API/Entity/DemandeEntity";
import {RequestBuilder} from "../API/Commons/RequestBuilder";
import {ResponseEntity} from "../API/Entity/ResponseEntity";

const BASE_URL = `${window.servicesRestBaseUrl || ""}/fwk-codification-rest`;

export default class DemandeDAOImpl implements DemandeDAO {
    async getDemandes(): Promise<DemandeEntity> {
        const {data, messages} = await RequestBuilder
            .get<ResponseEntity<DemandeEntity>>(`${BASE_URL}/codifications/nom/CD_TY_DEMAND_CLIENT?code_cible=5&numero_structures=324&code_langue=fra&code_application=1880`)
            .fetchJson();

        if (messages) {
            messages.forEach((error: any) => {
                throw new Error(error);
            });
        }

        return data;
    }
}
