import AuthentificationController from "../../../../Presentation/pages/Authentification/AuthentificationController";
import {CreationCompteServiceImpl} from "../../../../Domain/Services/CreationCompte";
import {CreationCompteRepositoryImpl} from "../../../../Domain/Repository/CreationCompte";

export function init() {
    const creationCompteRepository = new CreationCompteRepositoryImpl();
    const creationCompteService = new CreationCompteServiceImpl(creationCompteRepository);

    return new AuthentificationController({creationCompteService});
}