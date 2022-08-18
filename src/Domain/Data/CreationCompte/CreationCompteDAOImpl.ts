import CreationCompteDAO from "./CreationCompteDAO";
import CreationCompteRequestEntity from "../API/Entity/CreationCompteRequestEntity";
import {RequestBuilder} from "../API/Commons/RequestBuilder";
import {ResponseEntity} from "../API/Entity/ResponseEntity";
import CreationCompteEntity from "../API/Entity/CreationCompteEntity";
import {ErrorEntity} from "../API/Entity/ErrorEntity";

const BASE_URL = `${window.servicesRestBaseUrl || ""}/internet-authentification-rest`;

export default class CreationCompteDAOImpl implements CreationCompteDAO {
    async creationCompte(request: CreationCompteRequestEntity): Promise<CreationCompteEntity> {
        const {data, errors} = await RequestBuilder
            .post<ResponseEntity<string>>(
                `${BASE_URL}/authentifications/compte/prospect/macif/mfsid`
            )
            .appendHeader("Content-Type", "application/JSON")
            .body(request)
            .fetchJson();

        if (errors) {
            errors.forEach((error: ErrorEntity) => {
                throw new Error(error.codeMessageApplicatif);
            });
        }

        return {
            idCreationCompte: data
        };
    }
}
