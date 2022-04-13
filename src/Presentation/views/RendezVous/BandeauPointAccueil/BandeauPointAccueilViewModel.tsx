import PointAccueilViewModel from "../../../../Domain/Model/PointAccueil";
import { GetPointAccueilUseCase } from "../../../../Domain/UseCase/GetPointAccueil";
import ObservableViewModel from "../../../commons/ObservableViewModel";

interface BandeauPointAccueilViewModelDependencies {
  readonly useCase: GetPointAccueilUseCase;
}

export default class BandeauPointAccueilViewModel extends ObservableViewModel {
  private _pointAccueil: PointAccueilViewModel;

  constructor(readonly dependencies: BandeauPointAccueilViewModelDependencies) {
    super();
    this.dependencies = dependencies;
    this._pointAccueil = new PointAccueilViewModel();
  }

  async init() {
    const cdBuro = "7901";
    this._pointAccueil = await this.dependencies.useCase.invoke(cdBuro);
    this.dispatchDataChanged("pointAccueil");
  }

  get pointAccueil(): PointAccueilViewModel {
    return this._pointAccueil;
  }
}
