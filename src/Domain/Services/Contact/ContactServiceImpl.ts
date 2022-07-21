import {ContactRepositoryImpl} from "../../Repository/Contact";
import ContactEntity from "../../Data/API/Entity/ContactEntity";
import {AuthentificationRepositoryImpl} from "../../Repository/Authentification";

export default class ContactServiceImpl {
    constructor(private readonly contactRepository: ContactRepositoryImpl,
                private readonly authentificationRepository: AuthentificationRepositoryImpl) {
    }

    getContact(): Promise<ContactEntity> {
        if (!this.authentificationRepository.estConnecte()) {
            throw new Error("Utilisateur non connecté");
        }

        return this.contactRepository.getContact();
    }
}
