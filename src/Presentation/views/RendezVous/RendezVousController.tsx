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

export default class RendezVousController
    extends BaseController<RendezVousModelView>
    implements Loadable {
    private _state: RendezVousModelView;
    private _domaines?: Domaine;
    private _demandes?: Demande;
    private _canal?: Array<Canal>;
    private _pointAccueil?: PointAccueil;

    constructor(
        readonly domaineService: DomaineService,
        readonly demandeService: DemandeService,
        readonly pointAccueilService: PointAccueilService,
        readonly canalService: CanalService
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
                demandeSelected,
            },
        };
        this.raiseStateChanged();
    }

    onCanalSelected(canalSelected: string) {
        this._state = {
            ...this._state,
            rendezVous: {
                ...this._state.rendezVous,
                canalSelected,
            },
        };
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
