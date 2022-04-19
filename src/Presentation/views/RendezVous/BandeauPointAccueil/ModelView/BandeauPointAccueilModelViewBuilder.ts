import PointAccueil from "../../../../../Domain/Model/PointAccueil";
import BandeauPointAccueilModelView from "./BandeauPointAccueilModelView";

export default class BandeauPointAccueilModelViewBuilder {
  static buildFromPointAccueil(pointAccueil: PointAccueil): BandeauPointAccueilModelView {
    return new BandeauPointAccueilModelView(pointAccueil.etat);
  }

  static buildEmpty(): BandeauPointAccueilModelView {
    return new BandeauPointAccueilModelView();
  }
}
