import Domaine from "../../../../Domain/Model/Domaine";
import { DemandeService } from "../../../../Domain/Services/Demande";
import { DomaineService } from "../../../../Domain/Services/Domaine";
import BaseController from "../../../commons/BaseController";
import { Loadable } from "../../../commons/Loadable";
import DemandeModelViewBuilder from "./Demande/ModelView/DemandeModelViewBuilder";
import DomaineModelViewBuilder from "./Domaine/ModelView/DomaineModelViewBuilder";
import PriseRendezVousModelView from "./PriseRendezVousModelView";

export default class PriseRendezVousController
  extends BaseController<PriseRendezVousModelView>
  implements Loadable
{
  private _state: PriseRendezVousModelView;
  private _domaine?: Domaine;
  private _demande?: Domaine;

  constructor(
    readonly domaineService: DomaineService,
    readonly demandeService: DemandeService
  ) {
    super();
    this.onDomaineSelected = this.onDomaineSelected.bind(this);
    this.onDemandeSelected = this.onDemandeSelected.bind(this);
    this._state = {
      domaine: [],
      domaineSelected: "",
      demande: [],
      demandeSelected: "",
    };
  }

  async onLoad() {
    this._domaine = await this.domaineService.getDomaines();
    this._state = {
      ...this._state,
      domaine: this._domaine.etat.map(DomaineModelViewBuilder.buildFromDomaine),
      domaineSelected: "",
    };
    this.raiseStateChanged();
  }

  async onDomaineSelected(domaineSelected: string) {
    this._demande = await this.demandeService.getDemandes(domaineSelected);
    this._state = {
      ...this._state,
      demande: this._demande.etat.map(DemandeModelViewBuilder.buildFromDemande),
      demandeSelected: "",
      domaineSelected,
    };
    this.raiseStateChanged();
  }

  onDemandeSelected(demandeSelected: string) {
    this._state = {
      ...this._state,
      demandeSelected,
    };
    this.raiseStateChanged();
  }

  get state(): PriseRendezVousModelView {
    return this._state;
  }
}
