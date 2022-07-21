import CommunesDAO from "./CommunesDAO";
import CommunesRequestEntity from "../API/Entity/CommunesRequestEntity";
import CommuneEntity from "../API/Entity/CommuneEntity";
import {RequestBuilder} from "../API/Commons/RequestBuilder";
import {ResponseEntity} from "../API/Entity/ResponseEntity";

const BASE_URL = `${window.servicesRestBaseUrl || ""}/internet-donneesentreprise-rest/v1/codespostaux`;

export default class CommunesDAOImpl implements CommunesDAO {
    async getCommunes(request: CommunesRequestEntity): Promise<Array<CommuneEntity>> {
        const {data, messages} = await RequestBuilder
            .get<ResponseEntity<Array<CommuneEntity>>>(`${BASE_URL}/_suggest?query=${request.rechercheCommune}&pageSize=${request.pageSize}&inLieuDit=${request.lieuDit}&inAncienNom=${request.ancienNom}`)
            .fetchJson();

        if (messages) {
            messages.forEach((error: string) => {
                throw new Error(error);
            });
        }

        return data;
    }
}
