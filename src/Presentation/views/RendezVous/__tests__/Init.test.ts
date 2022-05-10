import PointAccueilDAOImpl from "../../../../Domain/Repository/Data/API/Impl/PointAccueilDAOImpl";
import { PointAccueilRepositoryImpl } from "../../../../Data/Repository/PointAccueilRepositoryImpl";
import { RendezVousViewModel } from "../RendezVousViewModel";
import PointAccueilServiceImpl from "../../../../Domain/Services/Impl/PointAccueilServiceImpl";

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
  const pointAccueilAPIDataSource = new PointAccueilDAOImpl();
  const pointAccueilRepository = new PointAccueilRepositoryImpl(
    pointAccueilAPIDataSource
  );
  const pointAccueilService = new PointAccueilServiceImpl(pointAccueilRepository);

  return new RendezVousViewModel({
    pointAccueilService,
  }).bandeauPointAccueilViewModel;
}
