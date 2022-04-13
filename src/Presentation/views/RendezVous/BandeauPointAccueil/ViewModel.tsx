import { PointAccueil } from "../../../../Domain/Model/PointAccueil";
import { GetPointAccueilUseCase } from "../../../../Domain/UseCase/GetPointAccueil";
import DispatchPropertyChanged from "../../../commons/DispatchPropertyChanged";
import ObservableViewModel from "../../../commons/ObservableViewModel";

interface BandeauPointAcceuilViewModelDependencies {
  readonly useCase: GetPointAccueilUseCase;
}

export default class BandeauPointAcceuilViewModel extends ObservableViewModel {
  private _pointAccueil: PointAccueil | undefined;

  constructor(readonly dependencies: BandeauPointAcceuilViewModelDependencies) {
    super();
    this.dependencies = dependencies;
  }

  async init() {
    const cdBuro = "7901";
    this._pointAccueil = await this.dependencies.useCase.invoke(cdBuro);
    this.dispatchDataChanged("pointAccueil")
  }

  get pointAccueil(): PointAccueil | undefined {
    return this._pointAccueil;
  }
}
