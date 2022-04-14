import { PointAccueilService } from "../../../Domain/Services/PointAccueil";
import ObservableViewModel from "../../commons/ObservableViewModel";
import BandeauPointAccueilViewModel from "./BandeauPointAccueil/BandeauPointAccueilViewModel";

interface RendezVousViewModelDependencies {
  readonly pointAccueilService: PointAccueilService;
}

export class RendezVousViewModel extends ObservableViewModel {
  private _bandeauPointAccueilViewModel: BandeauPointAccueilViewModel;

  constructor(readonly dependencies: RendezVousViewModelDependencies) {
    super();
    this._bandeauPointAccueilViewModel = new BandeauPointAccueilViewModel(
      dependencies
    );
  }

  get bandeauPointAccueilViewModel(): BandeauPointAccueilViewModel {
    return this._bandeauPointAccueilViewModel;
  }
}
