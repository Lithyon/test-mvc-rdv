import PointAccueilAPIDataSourceImpl from '../../../../Data/DataSource/API/PointAccueilAPIDataSourceImpl';
import { PointAccueilRepositoryImpl } from '../../../../Data/Repository/PointAccueilRepositoryImpl';
import { PointAccueilService } from '../../../../Domain/Services/PointAccueil';
import { default as BandeauPointAccueilView } from './BandeauPointAccueil';
import { default as BandeauPointAccueilController } from './BandeauPointAccueilController';

export default function BandeauPointAccueil() {
    const pointAccueilDataSource = new PointAccueilAPIDataSourceImpl();
    const pointAccueilRepo = new PointAccueilRepositoryImpl(pointAccueilDataSource);
    const pointAccueilService = new PointAccueilService(pointAccueilRepo);
    const controller = new BandeauPointAccueilController(pointAccueilService);

    return <BandeauPointAccueilView controller={controller} />
}
