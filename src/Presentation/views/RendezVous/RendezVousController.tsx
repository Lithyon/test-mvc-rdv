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

export default class RendezVousController
    extends BaseController<RendezVousModelView>
    implements Loadable {
    private _state: RendezVousModelView;
    private _domaines?: Domaine;
    private _demandes?: Domaine;
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
            domaines: [],
            demandes: [],
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
                noTel: this._pointAccueil.etat.noTeleLigne,
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
