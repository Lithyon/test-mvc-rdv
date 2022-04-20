import DemandeAPIDataSourceImpl from "../../../../Data/DataSource/API/DemandeAPIDataSourceImpl";
import DomaineAPIDataSourceImpl from "../../../../Data/DataSource/API/DomaineAPIDataSourceImpl";
import { DemandeRepositoryImpl } from "../../../../Domain/Repository/DemandeRepositoryImpl";
import { DomaineRepositoryImpl } from "../../../../Domain/Repository/DomaineRepositoryImpl";
import { DemandeService } from "../../../../Domain/Services/Demande";
import { DomaineService } from "../../../../Domain/Services/Domaine";
import { default as PriseRendezVousView } from "./PriseRendezVous";
import { default as PriseRendezVousController } from "./PriseRendezVousController";

export default function PriseRendezVous() {
  const domaineDataSource = new DomaineAPIDataSourceImpl();
  const domaineRepo = new DomaineRepositoryImpl(domaineDataSource);
  const domaineService = new DomaineService(domaineRepo);

  const demandeDataSource = new DemandeAPIDataSourceImpl();
  const demandeRepo = new DemandeRepositoryImpl(demandeDataSource);
  const demandeService = new DemandeService(demandeRepo);

  const controller = new PriseRendezVousController(domaineService, demandeService);

  return <PriseRendezVousView controller={controller} />;
}
