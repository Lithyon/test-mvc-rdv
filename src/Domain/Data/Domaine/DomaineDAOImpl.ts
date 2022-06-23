import DomaineDAO from "./DomaineDAO";
import DomaineEntity from "../API/Entity/DomaineEntity";
import {RequestBuilder} from "../API/Commons/RequestBuilder";
import {ResponseEntity} from "../API/Entity/ResponseEntity";

const BASE_URL = `${window.servicesRestBaseUrl || ""}/fwk-codification-rest`;

export default class DomaineDAOImpl implements DomaineDAO {
    async getDomaines(): Promise<DomaineEntity> {
        const {data, messages} = await RequestBuilder
            .get<ResponseEntity<DomaineEntity>>(`${BASE_URL}/codifications/nom/CD_DOMAINE_DEMAND?code_cible=5&numero_structures=324&code_langue=fra&code_application=1880`)
            .fetchJson();

        if (messages) {
            messages.forEach((error: any) => {
                throw new Error(error)
            });
        }

        return data;
    }
}
