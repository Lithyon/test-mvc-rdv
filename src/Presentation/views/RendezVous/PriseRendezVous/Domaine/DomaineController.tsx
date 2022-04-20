import Codification from "../../../../../Domain/Model/Codification";
import { CodificationService } from "../../../../../Domain/Services/Codification";
import BaseController from "../../../../commons/BaseController";
import CodificationModelView from "../../../../commons/Codfication/CodificationModelView";
import CodificationModelViewBuilder from "../../../../commons/Codfication/CodificationModelViewBuilder";
import CodificationSelectionModelView from "../../../../commons/Codfication/CodificationSelectionModelView";
import { Loadable } from "../../../../commons/Loadable";

export const AUTRE = "99";
export const AUTO = "01";
export const HABITATION = "02";
export const SANTE = "05";
export const BANQUE_EPARGNE = "12";
export const CREDIT = "03";
export const PREVOYANCE = "04";
export const PRO = "07";
export const DOMAINES = [
  AUTO,
  HABITATION,
  SANTE,
  BANQUE_EPARGNE,
  CREDIT,
  PREVOYANCE,
  PRO,
  AUTRE,
];

export default class DomaineController
  extends BaseController<CodificationSelectionModelView>
  implements Loadable
{
  private _state: CodificationSelectionModelView;
  private _codification?: Codification;
  private _filters: Array<string>;

  constructor(readonly codificationService: CodificationService) {
    super();
    this.onChoiceSelected = this.onChoiceSelected.bind(this);
    this._state = {
      codification: [],
      codificationSelected: CodificationModelViewBuilder.buildEmpty(),
    };
    this._filters = DOMAINES;
  }

  async onLoad() {
    this._codification = await this.codificationService.getCodifications(
      "CD_DOMAINE_DEMAND",
      this._filters
    );
    this._state = {
      codification: this._codification.etat.map(
        CodificationModelViewBuilder.buildFromCodification
      ),
      codificationSelected: CodificationModelViewBuilder.buildEmpty(),
    };
    this.raiseStateChanged();
  }

  onChoiceSelected(codificationSelected: CodificationModelView) {
    this._state = {
      ...this._state,
      codificationSelected,
    };

    this.raiseStateChanged();
  }

  get state(): CodificationSelectionModelView {
    return this._state;
  }
}
