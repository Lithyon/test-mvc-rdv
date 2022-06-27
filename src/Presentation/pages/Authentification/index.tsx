import AuthentificationView from "./Authentification";
import AuthentificationController from "./AuthentificationController";
import CreationCompteService from "../../../Domain/Services/CreationCompte";

export default function Authentification() {

    const controller = new AuthentificationController({
        creationCompteService: CreationCompteService,
    });

    return <AuthentificationView controller={controller}/>;
}
