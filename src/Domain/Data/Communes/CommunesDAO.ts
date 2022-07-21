import CommunesRequestEntity from "../API/Entity/CommunesRequestEntity";
import CommuneEntity from "../API/Entity/CommuneEntity";

export default interface CommunesDAO {
    getCommunes(request: CommunesRequestEntity): Promise<Array<CommuneEntity>>;
}
