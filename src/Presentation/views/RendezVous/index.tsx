import PointAccueilAPIDataSourceImpl from "../../../Data/DataSource/API/PointAccueilAPIDataSourceImpl";
import { PointAccueilRepositoryImpl } from "../../../Data/Repository/PointAccueilRepositoryImpl";
import { GetPointAccueilUseCase } from "../../../Domain/UseCase/GetPointAccueil";
import RendezVous from "./RendezVous";
import { RendezVousViewModel } from "./RendezVousViewModel";

const useCase = new GetPointAccueilUseCase(
  new PointAccueilRepositoryImpl(new PointAccueilAPIDataSourceImpl())
);

export default function RendezVousView() {
  const rendezVousViewModel = new RendezVousViewModel({ useCase });

  return <RendezVous dataContext={rendezVousViewModel} />;
}
