import RendezVousView from "./RendezVous";
import RendezVousController from "./RendezVousController";
import RendezVousService from "../../../Domain/Services/RendezVous/";
import DemandeService from "../../../Domain/Services/Demande/";
import DomaineService from "../../../Domain/Services/Domaine/";
import CanalService from "../../../Domain/Services/Canal/";
import PointAccueilService from "../../../Domain/Services/PointAccueil/";

export default function RendezVous() {
    const controller = new RendezVousController({
        domaineService: DomaineService,
        demandeService: DemandeService,
        pointAccueilService: PointAccueilService,
        canalService: CanalService,
        rendezVousService: RendezVousService
    });

    return <RendezVousView controller={controller}/>;
}
