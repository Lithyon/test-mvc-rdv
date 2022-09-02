import AuthentificationJahiaDAO from "./AuthentificationJahiaDAO";
import {RequestBuilder} from "../API/Commons/RequestBuilder";
import {ResponseEntity} from "../API/Entity/ResponseEntity";

export default class AuthentificationJahiaDAOImpl implements AuthentificationJahiaDAO {
    async finalisationConnexion(mfsid: string): Promise<void> {
        await RequestBuilder
            .post<ResponseEntity<string>>(
                `${window.servicesRestBaseUrl || ""}/cms/ajax/token?state=${mfsid}`
            )
            .appendHeader("Content-Type", "application/JSON")
            .body({})
            .onlyFetch();
    }
}
