import AuthentificationView from "./Authentification";
import AuthentificationController from "./AuthentificationController";
import CreationCompteService from "../../../Domain/Services/CreationCompte";
import SituationFamilialeService from "../../../Domain/Services/SituationFamiliale";
import ProfessionService from "../../../Domain/Services/Profession";
import ContactService from "../../../Domain/Services/Contact";
import RendezVousService from "../../../Domain/Services/RendezVous";

export default function Authentification() {

    const controller = new AuthentificationController({
        rendezVousService: RendezVousService,
        creationCompteService: CreationCompteService,
        situationFamilialeService: SituationFamilialeService,
        professionService: ProfessionService,
        contactService: ContactService
    });

    return <AuthentificationView controller={controller}/>;
}
