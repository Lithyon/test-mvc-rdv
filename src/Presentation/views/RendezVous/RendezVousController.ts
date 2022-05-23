import Domaine from "../../../Domain/Model/Domaine/Domaine";
import BaseController from "../../commons/BaseController";
import {IsLoadable} from "../../commons/IsLoadable";
import RendezVousModelView from "./ModelView/RendezVous/RendezVousModelView";
import RendezVousSelectionModelViewBuilder from "./ModelView/RendezVous/RendezVousSelectionModelViewBuilder";
import BandeauPointAccueilModelViewBuilder from "./BandeauPointAccueil/ModelView/BandeauPointAccueilModelViewBuilder";
import PointAccueil from "../../../Domain/Model/PointAccueil/PointAccueil";
import Demande from "../../../Domain/Model/Demande/Demande";
import DisponibilitesModelViewBuilder from "./ModelView/Disponibilites/DisponibilitesModelViewBuilder";
import {Canal, CanalCode} from "../../../Domain/Data/Enum/Canal";
import DisponibilitesRequest from "../../../Domain/Model/Disponibilites/DisponibilitesRequest";
import Disponibilites from "../../../Domain/Model/Disponibilites/Disponibilites";
import DemandeModelViewBuilder from "./ModelView/Demande/DemandeModelViewBuilder";
import DomaineModelViewBuilder from "./ModelView/Domaine/DomaineModelViewBuilder";
import LoadingObservableImpl from "../../commons/Impl/LoadingObservableImpl";
import {LoadingObservable} from "../../commons/LoadingObservable";
import ErrorObservableImpl from "../../commons/Impl/ErrorObservableImpl";
import {ErrorObservable} from "../../commons/ErrorObservable";
import {DomaineServiceImpl} from "../../../Domain/Services/Domaine";
import {DemandeServiceImpl} from "../../../Domain/Services/Demande";
import {PointAccueilServiceImpl} from "../../../Domain/Services/PointAccueil";
import {CanalServiceImpl} from "../../../Domain/Services/Canal";
import {RendezVousServiceImpl} from "../../../Domain/Services/RendezVous";

interface RendezVousControllerDependencies {
    readonly domaineService: DomaineServiceImpl,
    readonly demandeService: DemandeServiceImpl,
    readonly pointAccueilService: PointAccueilServiceImpl,
    readonly canalService: CanalServiceImpl,
    readonly rendezVousService: RendezVousServiceImpl
}

export default class RendezVousController
    extends BaseController<RendezVousModelView>
    implements IsLoadable {
    private _state: RendezVousModelView;
    private _domaines?: Array<Domaine>;
    private _demandes?: Array<Demande>;
    private _canal?: Array<Canal>;
    private _disponibilites?: Disponibilites;
    private _pointAccueil?: PointAccueil;
    private readonly _onLoadDisponibilitesObserver: LoadingObservableImpl;
    private readonly _hasErrorObserver: ErrorObservableImpl;

    constructor(
        readonly dependencies: RendezVousControllerDependencies
    ) {
        super();
        this.onDomaineSelected = this.onDomaineSelected.bind(this);
        this.onDemandeSelected = this.onDemandeSelected.bind(this);
        this.onCanalSelected = this.onCanalSelected.bind(this);
        this.onPrecisionChanged = this.onPrecisionChanged.bind(this);
        this.onJourSelected = this.onJourSelected.bind(this);
        this.loadDisponibilites = this.loadDisponibilites.bind(this);
        this.onHeureSelected = this.onHeureSelected.bind(this);
        this._onLoadDisponibilitesObserver = new LoadingObservableImpl();
        this._hasErrorObserver = new ErrorObservableImpl();
        this._state = {
            domaines: [],
            demandes: [],
            canal: [],
            disponibilites: DisponibilitesModelViewBuilder.buildEmpty(),
            rendezVous: RendezVousSelectionModelViewBuilder.buildEmpty(),
            pointAccueil: BandeauPointAccueilModelViewBuilder.buildEmpty(),
        };
    }

    async onLoad() {
        const cdBuro = new URLSearchParams(window.location.search).get("b") || "";
        this._pointAccueil = await this.dependencies.pointAccueilService.getPointAccueil(cdBuro);
        this._domaines = await this.dependencies.domaineService.getDomaines();
        this._state = {
            ...this._state,
            domaines: this._domaines.map(DomaineModelViewBuilder.buildFromDomaine),
            pointAccueil: BandeauPointAccueilModelViewBuilder.buildFromPointAccueil(
                this._pointAccueil
            ),
            rendezVous: {
                ...this._state.rendezVous,
                cdBuro: this._pointAccueil.state.cdBuro,
                nmCommu: this._pointAccueil.state.nmCommu,
            }
        };
        this.raiseStateChanged();
    }

    async onDomaineSelected(domaineSelected: string) {
        this._demandes = await this.dependencies.demandeService.getDemandes(domaineSelected);
        this._state = {
            ...this._state,
            demandes: this._demandes.map(DemandeModelViewBuilder.buildFromDemande),
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
        this._canal = this.dependencies.canalService.getDefaultCanal();
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

    async onCanalSelected(canalSelected: CanalCode) {
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
        try {
            this._onLoadDisponibilitesObserver.raiseAdvancementEvent({isOver: false});
            this._hasErrorObserver.raiseAdvancementEvent({hasError: false});
            const dtJour = new Date();

            if (dtDebut.getDate() === dtJour.getDate()) {
                dtDebut.setDate(dtJour.getDate() + 1);
            }

            this._disponibilites = await this.dependencies.rendezVousService.getDisponibilites(new DisponibilitesRequest({
                canalRendezVous: this._state.rendezVous.canalSelected,
                cdBuro: this._state.rendezVous.cdBuro,
                cdDemande: this._state.rendezVous.demandeSelected,
                cdDomaine: this._state.rendezVous.domaineSelected,
                dtDebut,
            }));

            this._state = {
                ...this._state,
                disponibilites: DisponibilitesModelViewBuilder.buildFromDisponibilites(this._disponibilites),
                rendezVous: {
                    ...this._state.rendezVous,
                    proposerChoixHoraire: false
                }
            }

            this._onLoadDisponibilitesObserver.raiseAdvancementEvent({isOver: true});
        } catch (error) {
            this._hasErrorObserver.raiseAdvancementEvent({hasError: true});
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

    onJourSelected(jourSelected: Date) {
        this._state = {
            ...this._state,
            rendezVous: {
                ...this._state.rendezVous,
                heure: 0,
                jour: jourSelected,
                proposerChoixHoraire: true
            }
        }
        this.raiseStateChanged();
    }

    onHeureSelected(heureSelected: number) {
        this._state = {
            ...this._state,
            rendezVous: {
                ...this._state.rendezVous,
                heure: heureSelected,
            }
        }
        this.raiseStateChanged();
    }

    get state(): RendezVousModelView {
        return this._state;
    }

    get onLoadDisponibilitesObserver(): LoadingObservable {
        return this._onLoadDisponibilitesObserver;
    }

    get hasErrorObserver(): ErrorObservable {
        return this._hasErrorObserver;
    }
}
