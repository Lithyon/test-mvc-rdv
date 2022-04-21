import Domaine from "../../../Domain/Model/Domaine";
import {DemandeService} from "../../../Domain/Services/Demande";
import {DomaineService} from "../../../Domain/Services/Domaine";
import BaseController from "../../commons/BaseController";
import {Loadable} from "../../commons/Loadable";
import DemandeModelViewBuilder from "./PriseRendezVous/Demande/ModelView/DemandeModelViewBuilder";
import DomaineModelViewBuilder from "./PriseRendezVous/Domaine/ModelView/DomaineModelViewBuilder";
import RendezVousModelView from "./ModelView/RendezVousModelView";
import RendezVousSelectionModelViewBuilder from "./ModelView/RendezVousSelectionModelViewBuilder";
import BandeauPointAccueilModelViewBuilder from "./BandeauPointAccueil/ModelView/BandeauPointAccueilModelViewBuilder";
import PointAccueil from "../../../Domain/Model/PointAccueil";
import {PointAccueilService} from "../../../Domain/Services/PointAccueil";

export default class RendezVousController
    extends BaseController<RendezVousModelView>
    implements Loadable {
    private _state: RendezVousModelView;
    private _domaine?: Domaine;
    private _demande?: Domaine;
    private _pointAccueil?: PointAccueil;

    constructor(
        readonly domaineService: DomaineService,
        readonly demandeService: DemandeService,
        readonly pointAccueilService: PointAccueilService
    ) {
        super();
        this.onDomaineSelected = this.onDomaineSelected.bind(this);
        this.onDemandeSelected = this.onDemandeSelected.bind(this);
        this._state = {
            domaine: [],
            demande: [],
            rendezVous: RendezVousSelectionModelViewBuilder.buildEmpty(),
            pointAccueil: BandeauPointAccueilModelViewBuilder.buildEmpty(),
        };
    }

    async onLoad() {
        const cdBuro = new URLSearchParams(window.location.search).get("b") || "";
        this._pointAccueil = await this.pointAccueilService.getPointAccueil(cdBuro);
        this._domaine = await this.domaineService.getDomaines();
        this._state = {
            ...this._state,
            domaine: this._domaine.etat.map(DomaineModelViewBuilder.buildFromDomaine),
            pointAccueil: BandeauPointAccueilModelViewBuilder.buildFromPointAccueil(
                this._pointAccueil.etat
            ),
            rendezVous: {
                ...this._state.rendezVous,
                cdBuro,
                noTel: this._pointAccueil.etat.noTeleLigne,
                nmCommu: this._pointAccueil.etat.nmCommu,
            }
        };
        this.raiseStateChanged();
    }

    async onDomaineSelected(domaineSelected: string) {
        this._demande = await this.demandeService.getDemandes(domaineSelected);
        this._state = {
            ...this._state,
            demande: this._demande.etat.map(DemandeModelViewBuilder.buildFromDemande),
            rendezVous: {
                ...this._state.rendezVous,
                demandeSelected: "",
                domaineSelected,
            }
        };
        this.raiseStateChanged();
    }

    onDemandeSelected(demandeSelected: string) {
        this._state = {
            ...this._state,
            rendezVous: {
                ...this._state.rendezVous,
                demandeSelected,
            },
        };
        this.raiseStateChanged();
    }

    get state(): RendezVousModelView {
        return this._state;
    }
}
