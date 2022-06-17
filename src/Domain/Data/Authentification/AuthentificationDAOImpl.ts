import AuthentificationDAO from "./AuthentificationDAO";
import {AuthentificationService} from "maciffr-services-js";
import AuthentificationEntity from "../API/Entity/AuthentificationEntity";


export default class AuthentificationDAOImpl implements AuthentificationDAO {
    async initialiseConnexion(urlRedirection: string, uuid: string): Promise<AuthentificationEntity> {
        return AuthentificationService.initiateLogin(urlRedirection, uuid, "authentification");
    }
}
