import PointAccueilAPIDataSourceImpl from "../../../../Domain/Repository/Data/API/PointAccueilAPIDataSourceImpl";
import { PointAccueilRepositoryImpl } from "../../../../Data/Repository/PointAccueilRepositoryImpl";
import { PointAccueilService } from "../../../../Domain/Services/PointAccueil";
import { RendezVousViewModel } from "../RendezVousViewModel";

describe("Section RendezVous: PointAccueil", () => {
  describe("initialisation", () => {
    it("Doit charger le point d'accueil quand la vue est initialisée", () => {
      const viewModel = _initContext();

      viewModel.init();

      expect(viewModel.cdBuro).toEqual("");
      expect(viewModel.codePostal).toEqual("");
      expect(viewModel.commune).toEqual("");
      expect(viewModel.horairesOuvertureFermetures).toEqual([]);
      expect(viewModel.noVoie).toEqual("");
      expect(viewModel.nomPointAccueil).toEqual("");
      expect(viewModel.nomVoie).toEqual("");
      expect(viewModel.srcImgPointAccueil).toEqual("");
      expect(viewModel.telPointAccueil).toEqual("");
      expect(viewModel.typeVoie).toEqual("");
      expect(viewModel.urlPointAccueil).toEqual("");
    });
  });
});

function _initContext() {
  const pointAccueilAPIDataSource = new PointAccueilAPIDataSourceImpl();
  const pointAccueilRepository = new PointAccueilRepositoryImpl(
    pointAccueilAPIDataSource
  );
  const pointAccueilService = new PointAccueilService(pointAccueilRepository);

  return new RendezVousViewModel({
    pointAccueilService,
  }).bandeauPointAccueilViewModel;
}
