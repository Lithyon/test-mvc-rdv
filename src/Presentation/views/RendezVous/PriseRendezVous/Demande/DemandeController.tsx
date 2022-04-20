import Codification from "../../../../../Domain/Model/Codification";
import { CodificationService } from "../../../../../Domain/Services/Codification";
import { Loadable } from "../../../../commons/Loadable";
import BaseController from "../../../../commons/BaseController";
import CodificationModelView from "../../../../commons/Codfication/CodificationModelView";
import CodificationModelViewBuilder from "../../../../commons/Codfication/CodificationModelViewBuilder";
import CodificationSelectionModelView from "../../../../commons/Codfication/CodificationSelectionModelView";

export const AUTRE = "99";
export const DEVIS = "01";
export const SOUSCRIPTION = "02";
export const MODIFICATION_CONTRAT = "03";
export const SINISTRE = "04";
export const DEMANDES_HORS_SINISTRE = [
  DEVIS,
  SOUSCRIPTION,
  SINISTRE,
  MODIFICATION_CONTRAT,
  AUTRE,
];

export default class DomaineRendezVousController
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
    this._filters = DEMANDES_HORS_SINISTRE;
  }

  async onLoad() {
    this._codification = await this.codificationService.getCodifications(
      "CD_TY_DEMAND_CLIENT",
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
