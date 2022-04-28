import Domaine from "../../../Domain/Model/Domaine";
import {DemandeService} from "../../../Domain/Services/Demande";
import {DomaineService} from "../../../Domain/Services/Domaine";
import BaseController from "../../commons/BaseController";
import {Loadable} from "../../commons/Loadable";
import RendezVousModelView from "./ModelView/RendezVousModelView";
import RendezVousSelectionModelViewBuilder from "./ModelView/RendezVousSelectionModelViewBuilder";
import BandeauPointAccueilModelViewBuilder from "./BandeauPointAccueil/ModelView/BandeauPointAccueilModelViewBuilder";
import PointAccueil from "../../../Domain/Model/PointAccueil";
import {PointAccueilService} from "../../../Domain/Services/PointAccueil";
import CodificationModelViewBuilder from "../../commons/Codification/CodificationModelViewBuilder";
import {CanalService} from "../../../Domain/Services/Canal";
import Demande from "../../../Domain/Model/Demande";
import {Canal} from "../../../Domain/Repository/CanalRepository";
import {RendezVousDisponibilites, RendezVousDisponibilitesResponse} from "../../../Domain/Model/RendezVous";
import RendezVousDisponibilitesModelViewBuilder from "./ModelView/RendezVousDisponibilitesModelViewBuilder";
import {RendezVousService} from "../../../Domain/Services/RendezVous";

export default class RendezVousController
    extends BaseController<RendezVousModelView>
    implements Loadable {
    private _state: RendezVousModelView;
    private _domaines?: Domaine;
    private _demandes?: Demande;
    private _canal?: Array<Canal>;
    private _disponibilites?: RendezVousDisponibilitesResponse;
    private _pointAccueil?: PointAccueil;

    constructor(
        readonly domaineService: DomaineService,
        readonly demandeService: DemandeService,
        readonly pointAccueilService: PointAccueilService,
        readonly canalService: CanalService,
        readonly rendezVousService: RendezVousService
    ) {
        super();
        this.onDomaineSelected = this.onDomaineSelected.bind(this);
        this.onDemandeSelected = this.onDemandeSelected.bind(this);
        this.onCanalSelected = this.onCanalSelected.bind(this);
        this.onPrecisionChanged = this.onPrecisionChanged.bind(this);
        this._state = {
            domaines: [],
            demandes: [],
            canal: [],
            disponibilites: RendezVousDisponibilitesModelViewBuilder.buildEmpty(),
            rendezVous: RendezVousSelectionModelViewBuilder.buildEmpty(),
            pointAccueil: BandeauPointAccueilModelViewBuilder.buildEmpty(),
        };
    }

    async onLoad() {
        const cdBuro = new URLSearchParams(window.location.search).get("b") || "";
        this._pointAccueil = await this.pointAccueilService.getPointAccueil(cdBuro);
        this._domaines = await this.domaineService.getDomaines();
        this._state = {
            ...this._state,
            domaines: this._domaines.etat.map(CodificationModelViewBuilder.buildFromCodification),
            pointAccueil: BandeauPointAccueilModelViewBuilder.buildFromPointAccueil(
                this._pointAccueil.etat
            ),
            rendezVous: {
                ...this._state.rendezVous,
                cdBuro,
                nmCommu: this._pointAccueil.etat.nmCommu,
            }
        };
        this.raiseStateChanged();
    }

    async onDomaineSelected(domaineSelected: string) {
        this._demandes = await this.demandeService.getDemandes(domaineSelected);
        this._state = {
            ...this._state,
            demandes: this._demandes.etat.map(CodificationModelViewBuilder.buildFromCodification),
            canal: [],
            rendezVous: {
                ...this._state.rendezVous,
                demandeSelected: "",
                canalSelected: "",
                precision: "",
                domaineSelected,
            }
        };
        this.raiseStateChanged();
    }

    onDemandeSelected(demandeSelected: string) {
        this._canal = this.canalService.getDefaultCanal();
        this._state = {
            ...this._state,
            canal: this._canal,
            rendezVous: {
                ...this._state.rendezVous,
                canalSelected: "",
                precision: "",
                demandeSelected,
            },
        };
        this.raiseStateChanged();
    }

    async onCanalSelected(canalSelected: string) {
        this._state = {
            ...this._state,
            rendezVous: {
                ...this._state.rendezVous,
                precision: "",
                canalSelected,
            },
        };
        this.raiseStateChanged();
        await this.loadDisponibilites()
    }

    async loadDisponibilites(dtDebut = new Date()) {
        this._disponibilites = await this.rendezVousService.getDisponibilites(new RendezVousDisponibilites({
            cdBuro: this._state.rendezVous.cdBuro,
            dtDebut,
            motifs: [{
                cdDemande: this._state.rendezVous.demandeSelected,
                cdDomaine: this._state.rendezVous.domaineSelected
            }]
        }));
        this._state = {
            ...this._state,
            disponibilites: RendezVousDisponibilitesModelViewBuilder.buildFromDisponibilites(this._disponibilites.etat),
        }
        this.raiseStateChanged();
    }

    onPrecisionChanged(precision: string) {
        this._state = {
            ...this._state,
            rendezVous: {
                ...this._state.rendezVous,
                precision,
            }
        }
        this.raiseStateChanged();
    }

    get state(): RendezVousModelView {
        return this._state;
    }
}
