import PointAccueil from "../../../../Domain/Model/PointAccueil";
import { PointAccueilService } from "../../../../Domain/Services/PointAccueil";
import Controller, { StateChangedHandler } from "../../../commons/Controller";
import BandeauPointAccueilModelView from "./ModelView/BandeauPointAccueilModelView";
import BandeauPointAccueilModelViewBuilder from "./ModelView/BandeauPointAccueilModelViewBuilder";

export default class BandeauPointAccueilController
  implements Controller<BandeauPointAccueilModelView>
{
  private _state: BandeauPointAccueilModelView;
  private _pointAccueil?: PointAccueil;
  private _onStateChanged?: StateChangedHandler;

  constructor(readonly pointAccueilService: PointAccueilService) {
    this._state = BandeauPointAccueilModelViewBuilder.buildEmpty();
  }

  async onLoad() {
    const cdBuro = "7901";
    this._pointAccueil = await this.pointAccueilService.getPointAccueil(cdBuro);
    this._state = BandeauPointAccueilModelViewBuilder.buildFromPointAccueil(
      this._pointAccueil
    );
    this.raiseStateChanged();
  }

  get state(): BandeauPointAccueilModelView {
    return this._state;
  }

  subscribeStateChanged(onStateChanged: StateChangedHandler): void {
    this._onStateChanged = onStateChanged;
  }

  unsubscribeStateChanged(onStateChanged: StateChangedHandler): void {
    this._onStateChanged = undefined;
  }

  raiseStateChanged() {
    this._onStateChanged && this._onStateChanged();
  }
}
