import CodificationAPIDataSourceImpl from '../../../../../Data/DataSource/API/CodificationAPIDataSourceImpl';
import { CodificationRepositoryImpl } from '../../../../../Data/Repository/CodificationRepositoryImpl';
import { CodificationService } from '../../../../../Domain/Services/Codification';
import { default as DomaineView } from './Domaine';
import { default as DomaineController } from './DomaineController';

export default function Domaine() {
    const codificationDataSource = new CodificationAPIDataSourceImpl();
    const codificationRepo = new CodificationRepositoryImpl(codificationDataSource);
    const codificationService = new CodificationService(codificationRepo);
    const controller = new DomaineController(codificationService);

    return <DomaineView controller={controller} />
}
