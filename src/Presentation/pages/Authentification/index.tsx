import AuthentificationView from "./Authentification";
import AuthentificationController from "./AuthentificationController";
import CreationCompteService from "../../../Domain/Services/CreationCompte";
import SituationFamilialeService from "../../../Domain/Services/SituationFamiliale";

export default function Authentification() {

    const controller = new AuthentificationController({
        creationCompteService: CreationCompteService,
        situationFamilialeService: SituationFamilialeService
    });

    return <AuthentificationView controller={controller}/>;
}
