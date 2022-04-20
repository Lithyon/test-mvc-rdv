import CodificationAPIDataSourceImpl from '../../../../Data/DataSource/API/CodificationAPIDataSourceImpl';
import { CodificationRepositoryImpl } from '../../../../Data/Repository/CodificationRepositoryImpl';
import { CodificationService } from '../../../../Domain/Services/Codification';
import { default as PriseRendezVousView } from './PriseRendezVous';
import { default as PriseRendezVousController } from './PriseRendezVousController';

export default function PriseRendezVous() {
    const codificationDataSource = new CodificationAPIDataSourceImpl();
    const codificationRepo = new CodificationRepositoryImpl(codificationDataSource);
    const codificationService = new CodificationService(codificationRepo);
    const controller = new PriseRendezVousController(codificationService);

    return <PriseRendezVousView controller={controller} />
}
