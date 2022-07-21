import SituationFamilialeDAO from "./SituationFamilialeDAO";
import SituationFamilialeEntity from "../API/Entity/SituationFamilialeEntity";
import {RequestBuilder} from "../API/Commons/RequestBuilder";
import {ResponseEntity} from "../API/Entity/ResponseEntity";

const BASE_URL = `${window.servicesRestBaseUrl || ""}/fwk-codification-rest`;

export default class SituationFamilialeDAOImpl implements SituationFamilialeDAO {
    async getSituationFamiliale(): Promise<SituationFamilialeEntity> {
        const {data, messages} = await RequestBuilder
            .get<ResponseEntity<SituationFamilialeEntity>>(`${BASE_URL}/codifications/nom/CD_SITUAT_FAMIL?code_cible=5&numero_structures=324&code_langue=fra&code_application=1880`)
            .fetchJson();

        if (messages) {
            messages.forEach((error: string) => {
                throw new Error(error);
            });
        }

        return data;
    }
}
