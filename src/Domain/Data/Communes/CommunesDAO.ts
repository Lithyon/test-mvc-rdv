import CommunesEntity from "../API/Entity/CommunesEntity";
import CommunesRequestEntity from "../API/Entity/CommunesRequestEntity";

export default interface CommunesDAO {
    getCommunes(request: CommunesRequestEntity): Promise<CommunesEntity>;
}
