import PointAccueilAPIDataSourceImpl from "../../../Data/DataSource/API/PointAccueilAPIDataSourceImpl";
import { PointAccueilRepositoryImpl } from "../../../Data/Repository/PointAccueilRepositoryImpl";
import { PointAccueilService } from "../../../Domain/Services/PointAccueil";
import RendezVous from "./RendezVous";
import { RendezVousViewModel } from "./RendezVousViewModel";

const pointAccueilAPIDataSource = new PointAccueilAPIDataSourceImpl();
const pointAccueilRepository = new PointAccueilRepositoryImpl(
  pointAccueilAPIDataSource
);
const pointAccueilService = new PointAccueilService(pointAccueilRepository);

export default function RendezVousView() {
  const rendezVousViewModel = new RendezVousViewModel({ pointAccueilService });

  return <RendezVous dataContext={rendezVousViewModel} />;
}
