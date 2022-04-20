import CodificationAPIDataSourceImpl from '../../../../../Data/DataSource/API/CodificationAPIDataSourceImpl';
import { CodificationRepositoryImpl } from '../../../../../Data/Repository/CodificationRepositoryImpl';
import { CodificationService } from '../../../../../Domain/Services/Codification';
import { default as DemandeView } from './Demande';
import { default as DemandeController } from './DemandeController';

export default function Demande() {
    const codificationDataSource = new CodificationAPIDataSourceImpl();
    const codificationRepo = new CodificationRepositoryImpl(codificationDataSource);
    const codificationService = new CodificationService(codificationRepo);
    const controller = new DemandeController(codificationService);

    return <DemandeView controller={controller} />
}
