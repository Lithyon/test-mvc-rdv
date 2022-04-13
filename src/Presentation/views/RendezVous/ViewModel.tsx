import { GetPointAccueilUseCase } from "../../../Domain/UseCase/GetPointAccueil";
import ObservableViewModel from "../../commons/ObservableViewModel";
import BandeauPointAcceuilViewModel from "./BandeauPointAccueil/ViewModel";

interface RendezVousViewModelDependencies {
  readonly useCase: GetPointAccueilUseCase;
}

export class RendezVousViewModel extends ObservableViewModel {
  private _bandeauPointAccueilViewModel: BandeauPointAcceuilViewModel;

  constructor(readonly dependencies: RendezVousViewModelDependencies) {
    super();
    this._bandeauPointAccueilViewModel = new BandeauPointAcceuilViewModel(
      dependencies
    );
  }

  get bandeauPointAccueilViewModel(): BandeauPointAcceuilViewModel {
    return this._bandeauPointAccueilViewModel;
  }
}
