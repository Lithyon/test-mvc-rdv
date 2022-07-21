import AuthentificationView from "./Authentification";
import AuthentificationController from "./AuthentificationController";
import CreationCompteService from "../../../Domain/Services/CreationCompte";
import SituationFamilialeService from "../../../Domain/Services/SituationFamiliale";
import ProfessionService from "../../../Domain/Services/Profession";

export default function Authentification() {

    const controller = new AuthentificationController({
        creationCompteService: CreationCompteService,
        situationFamilialeService: SituationFamilialeService,
        professionService: ProfessionService
    });

    return <AuthentificationView controller={controller}/>;
}
