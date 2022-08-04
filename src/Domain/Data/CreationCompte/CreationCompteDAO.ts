import CreationCompteEntity from "../API/Entity/CreationCompteEntity";
import CreationCompteRequestEntity from "../API/Entity/CreationCompteRequestEntity";

export default interface CreationCompteDAO {
    creationCompte(creationCompteRequestEntity: CreationCompteRequestEntity): Promise<CreationCompteEntity>;
    sauvegardeResultatCreationCompte(requestParam: string): Promise<void>;
}
