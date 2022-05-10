import RendezVousView from "./RendezVous";
import DomaineDAOImpl from "../../../Domain/Repository/Data/API/Impl/DomaineDAOImpl";
import {DomaineRepositoryImpl} from "../../../Domain/Repository/Impl/DomaineRepositoryImpl";
import DemandeDAOImpl from "../../../Domain/Repository/Data/API/Impl/DemandeDAOImpl";
import {DemandeRepositoryImpl} from "../../../Domain/Repository/Impl/DemandeRepositoryImpl";
import RendezVousController from "./RendezVousController";
import PointAccueilDAOImpl from "../../../Domain/Repository/Data/API/Impl/PointAccueilDAOImpl";
import {PointAccueilRepositoryImpl} from "../../../Domain/Repository/Impl/PointAccueilRepositoryImpl";
import CanalRepositoryImpl from "../../../Domain/Repository/Impl/CanalRepositoryImpl";
import DefaultCanal from "../../../Domain/Repository/Data/Enum/Canal";
import RendezVousDAOImpl from "../../../Domain/Repository/Data/API/Impl/RendezVousDAOImpl";
import {RendezVousRepositoryImpl} from "../../../Domain/Repository/Impl/RendezVousRepositoryImpl";
import CanalServiceImpl from "../../../Domain/Services/Impl/CanalServiceImpl";
import DemandeServiceImpl from "../../../Domain/Services/Impl/DemandeServiceImpl";
import DomaineServiceImpl from "../../../Domain/Services/Impl/DomaineServiceImpl";
import PointAccueilServiceImpl from "../../../Domain/Services/Impl/PointAccueilServiceImpl";
import RendezVousServiceImpl from "../../../Domain/Services/Impl/RendezVousServiceImpl";

export default function RendezVous() {
    const domaineDataSource = new DomaineDAOImpl();
    const domaineRepo = new DomaineRepositoryImpl(domaineDataSource);
    const domaineService = new DomaineServiceImpl(domaineRepo);

    const demandeDataSource = new DemandeDAOImpl();
    const demandeRepo = new DemandeRepositoryImpl(demandeDataSource);
    const demandeService = new DemandeServiceImpl(demandeRepo);

    const canalRepo = new CanalRepositoryImpl({defaultCanalDataSource: DefaultCanal});
    const canalService = new CanalServiceImpl(canalRepo);

    const pointAccueilDataSource = new PointAccueilDAOImpl();
    const pointAccueilRepo = new PointAccueilRepositoryImpl(pointAccueilDataSource);
    const pointAccueilService = new PointAccueilServiceImpl(pointAccueilRepo);

    const rendezVousDataSource = new RendezVousDAOImpl();
    const rendezVousRepo = new RendezVousRepositoryImpl(rendezVousDataSource);
    const rendezVousService = new RendezVousServiceImpl(rendezVousRepo);

    const controller = new RendezVousController(domaineService, demandeService, pointAccueilService, canalService, rendezVousService);

    return <RendezVousView controller={controller}/>;
}
