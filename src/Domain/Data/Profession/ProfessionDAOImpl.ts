import ProfessionDAO from "./ProfessionDAO";
import ProfessionEntity from "../API/Entity/ProfessionEntity";
import {ResponseEntity} from "../API/Entity/ResponseEntity";
import {RequestBuilder} from "../API/Commons/RequestBuilder";

const BASE_URL = `${window.servicesRestBaseUrl || ""}/fwk-codification-rest`;

export default class ProfessionDAOImpl implements ProfessionDAO {
    async getProfession(): Promise<ProfessionEntity> {
        const {data, messages} = await RequestBuilder
            .get<ResponseEntity<ProfessionEntity>>(`${BASE_URL}/codifications/nom/CD_PROF_PERS?code_cible=5&numero_structures=324&code_langue=fra&code_application=1880`)
            .fetchJson();

        if (messages) {
            messages.forEach((error: string) => {
                throw new Error(error);
            });
        }

        return data;
    }
}
