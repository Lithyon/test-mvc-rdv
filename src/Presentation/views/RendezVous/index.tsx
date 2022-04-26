import RendezVousView from "./RendezVous";
import DomaineAPIDataSourceImpl from "../../../Domain/Repository/Data/API/DomaineAPIDataSourceImpl";
import {DomaineRepositoryImpl} from "../../../Domain/Repository/DomaineRepositoryImpl";
import {DomaineService} from "../../../Domain/Services/Domaine";
import DemandeAPIDataSourceImpl from "../../../Domain/Repository/Data/API/DemandeAPIDataSourceImpl";
import {DemandeRepositoryImpl} from "../../../Domain/Repository/DemandeRepositoryImpl";
import {DemandeService} from "../../../Domain/Services/Demande";
import RendezVousController from "./RendezVousController";
import PointAccueilAPIDataSourceImpl from "../../../Domain/Repository/Data/API/PointAccueilAPIDataSourceImpl";
import {PointAccueilRepositoryImpl} from "../../../Domain/Repository/PointAccueilRepositoryImpl";
import {PointAccueilService} from "../../../Domain/Services/PointAccueil";
import {CanalRepositoryImpl} from "../../../Domain/Repository/CanalRepository";
import {CanalService} from "../../../Domain/Services/Canal";
import DefaultCanal from "../../../Domain/Repository/Data/Enum/Canal";

export default function RendezVous() {
  const domaineDataSource = new DomaineAPIDataSourceImpl();
  const domaineRepo = new DomaineRepositoryImpl(domaineDataSource);
  const domaineService = new DomaineService(domaineRepo);

  const demandeDataSource = new DemandeAPIDataSourceImpl();
  const demandeRepo = new DemandeRepositoryImpl(demandeDataSource);
  const demandeService = new DemandeService(demandeRepo);

  const canalRepo = new CanalRepositoryImpl({defaultCanalDataSource: DefaultCanal});
  const canalService = new CanalService(canalRepo);

  const pointAccueilDataSource = new PointAccueilAPIDataSourceImpl();
  const pointAccueilRepo = new PointAccueilRepositoryImpl(pointAccueilDataSource);
  const pointAccueilService = new PointAccueilService(pointAccueilRepo);

  const controller = new RendezVousController(domaineService, demandeService, pointAccueilService, canalService);

  return <RendezVousView controller={controller} />;
}
