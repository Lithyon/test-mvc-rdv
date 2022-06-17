import DomaineDAO from "./DomaineDAO";
import DomaineEntity from "../API/Entity/DomaineEntity";
import {RequestMacif} from "../API/Commons/RequestMacif";

const BASE_URL = `${window.servicesRestBaseUrl || ""}/fwk-codification-rest`;

export default class DomaineDAOImpl implements DomaineDAO {
    async getDomaines(): Promise<DomaineEntity> {
        const response = await fetch(
            new RequestMacif(`${BASE_URL}/codifications/nom/CD_DOMAINE_DEMAND?code_cible=5&numero_structures=324&code_langue=fra&code_application=1880`)
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
