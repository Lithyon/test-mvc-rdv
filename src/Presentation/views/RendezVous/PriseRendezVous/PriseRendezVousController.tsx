import { CodificationService } from "../../../../Domain/Services/Codification";
import BaseController from "../../../commons/BaseController";
import CodificationModelViewBuilder from "../../../commons/Codfication/CodificationModelViewBuilder";
import PriseRendezVousModelView from "./PriseRendezVousModelView";

export default class PriseRendezVousController extends BaseController<PriseRendezVousModelView> {
  private _state: PriseRendezVousModelView;

  constructor(readonly codificationService: CodificationService) {
    super();
    this._state = {
      domaineSelected: CodificationModelViewBuilder.buildEmpty(),
      demandeSelected: CodificationModelViewBuilder.buildEmpty(),
    };
  }

  get state(): PriseRendezVousModelView {
    return this._state;
  }
}
