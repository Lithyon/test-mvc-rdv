import AuthentificationEntity from "../API/Entity/AuthentificationEntity";

export default interface AuthentificationDAO {
    initialiseConnexion(urlRedirection: string, uuid: string): Promise<AuthentificationEntity>;
}
