import CreationCompteDAO from "./CreationCompteDAO";
import CreationCompteRequestEntity from "../API/Entity/CreationCompteRequestEntity";
import {RequestBuilder} from "../API/Commons/RequestBuilder";
import {ResponseEntity} from "../API/Entity/ResponseEntity";
import CreationCompteEntity from "../API/Entity/CreationCompteEntity";

const BASE_URL = `${window.servicesRestBaseUrl || ""}/internet-authentification-rest`;

export default class CreationCompteDAOImpl implements CreationCompteDAO {
    async creationCompte(request: CreationCompteRequestEntity) {
        const {data, messages} = await RequestBuilder
            .post<ResponseEntity<CreationCompteEntity>>(`${BASE_URL}/authentifications/compte/prospect/macif/mfsid`)
            .appendHeader("Content-Type", "application/JSON")
            .body(JSON.stringify(request))
            .fetchJson();

        if (messages) {
            messages.forEach((error: string) => {
                throw new Error(error)
            });
        }

        return data;
    }
}
