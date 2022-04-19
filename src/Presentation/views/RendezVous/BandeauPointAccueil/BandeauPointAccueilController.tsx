import PointAccueil from "../../../../Domain/Model/PointAccueil";
import { PointAccueilService } from "../../../../Domain/Services/PointAccueil";
import { Loadable } from "../../../commons/Loadable";
import BaseController from "../../../commons/BaseController";
import BandeauPointAccueilModelView from "./ModelView/BandeauPointAccueilModelView";
import BandeauPointAccueilModelViewBuilder from "./ModelView/BandeauPointAccueilModelViewBuilder";

export default class BandeauPointAccueilController
  extends BaseController<BandeauPointAccueilModelView>
  implements Loadable
{
  private _state: BandeauPointAccueilModelView;
  private _pointAccueil?: PointAccueil;

  constructor(readonly pointAccueilService: PointAccueilService) {
    super();
    this._state = BandeauPointAccueilModelViewBuilder.buildEmpty();
  }

  async onLoad() {
    const cdBuro = "7901";
    this._pointAccueil = await this.pointAccueilService.getPointAccueil(cdBuro);
    this._state = BandeauPointAccueilModelViewBuilder.buildFromPointAccueil(
      this._pointAccueil.etat
    );
    this.raiseStateChanged();
  }

  get state(): BandeauPointAccueilModelView {
    return this._state;
  }
}
