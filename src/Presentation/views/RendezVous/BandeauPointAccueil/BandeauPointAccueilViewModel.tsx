import PointAccueil, { PointAccueilEtat } from "../../../../Domain/Model/PointAccueil";
import { PointAccueilService } from "../../../../Domain/Services/PointAccueil";
import ObservableViewModel from "../../../commons/ObservableViewModel";

interface BandeauPointAccueilViewModelDependencies {
  readonly pointAccueilService: PointAccueilService;
}

export default class BandeauPointAccueilViewModel extends ObservableViewModel {
  private _pointAccueil: PointAccueil;
  private _pointAccueilEtat?: PointAccueilEtat;
  private _urlImg?: string;
  private _urlPointAccueil?: string;

  constructor(readonly dependencies: BandeauPointAccueilViewModelDependencies) {
    super();
    this.dependencies = dependencies;
    this._pointAccueil = new PointAccueil();
  }

  async init() {
    const cdBuro = "7901";
    this._pointAccueil = await this.dependencies.pointAccueilService.getPointAccueil(cdBuro);
    this._pointAccueilEtat = this._pointAccueil.etat;
    this._urlImg = `https://www.macif.fr/files/live/sites/maciffr/files/maciffr/NousContacter/pa_${cdBuro}.jpg`;
    this._urlPointAccueil = `https://www.macif.fr/files/live/sites/maciffr/files/maciffr/NousContacter/pa_${cdBuro}.jpg`;
    this.dispatchDataChanged();
  }

  get cdBuro() {
    return this._pointAccueilEtat?.cdBuro || "";
  }

  get nomPointAccueil() {
    return this._pointAccueilEtat?.liBuro || "";
  }

  get telPointAccueil() {
    return this._pointAccueilEtat?.noTeleLigne || "";
  }

  get noVoie() {
    return this._pointAccueilEtat?.noVoie || "";
  }
  
  get typeVoie() {
    return this._pointAccueilEtat?.liNatuVoie || "";
  }
  
  get nomVoie() {
    return this._pointAccueilEtat?.nmVoie || "";
  }

  get codePostal() {
    return this._pointAccueilEtat?.cdPost || "";
  }

  get commune() {
    return this._pointAccueilEtat?.nmCommu || "";
  }

  get srcImgPointAccueil() {
    return this._urlImg || "";
  }

  get urlPointAccueil() {
    return this._urlPointAccueil || "";
  }

  get horairesOuvertureFermetures() {
    return this._pointAccueilEtat?.horairesOuvertureFermetures || [];
  }
}
