import Canal from "../../../Domain/Model/Canal/Canal";
import Domaine from "../../../Domain/Model/Domaine/Domaine";
import BaseController from "../../commons/BaseController";
import {IsLoadable} from "../../commons/IsLoadable";
import RendezVousModelView from "./ModelView/RendezVous/RendezVousModelView";
import RendezVousSelectionModelViewBuilder from "./ModelView/RendezVous/RendezVousSelectionModelViewBuilder";
import BandeauPointAccueilModelViewBuilder from "./BandeauPointAccueil/ModelView/BandeauPointAccueilModelViewBuilder";
import PointAccueil from "../../../Domain/Model/PointAccueil/PointAccueil";
import Demande from "../../../Domain/Model/Demande/Demande";
import DisponibilitesModelViewBuilder from "./ModelView/Disponibilites/DisponibilitesModelViewBuilder";
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
import {ChoixConnexionServiceImpl} from "../../../Domain/Services/ChoixConnexion";
import CanalModelViewBuilder from "./ModelView/Canal/CanalModelViewBuilder";
import DomaineModelView from "./ModelView/Domaine/DomaineModelView";
import DemandeModelView from "./ModelView/Demande/DemandeModelView";
import CanalModelView from "./ModelView/Canal/CanalModelView";
import HeureDisponibleModelView from "./ModelView/Disponibilites/HeureDisponibleModelView";
import ChoixConnexionModelViewBuilder from "./ModelView/ChoixConnexion/ChoixConnexionModelViewBuilder";
import ChoixConnexionModelView from "./ModelView/ChoixConnexion/ChoixConnexionModelView";
import HeureDisponibleModelViewBuilder from "./ModelView/Disponibilites/HeureDisponibleModelViewBuilder";

interface RendezVousControllerDependencies {
    readonly domaineService: DomaineServiceImpl,
    readonly demandeService: DemandeServiceImpl,
    readonly pointAccueilService: PointAccueilServiceImpl,
    readonly canalService: CanalServiceImpl,
    readonly rendezVousService: RendezVousServiceImpl,
    readonly choixConnexionService: ChoixConnexionServiceImpl
}

export default class RendezVousController
    extends BaseController<RendezVousModelView>
    implements IsLoadable {
    private _domaines?: Array<Domaine>;
    private _demandes?: Array<Demande>;
    private _canal?: Array<Canal>;
    private _disponibilites?: Disponibilites;
    private _pointAccueil?: PointAccueil;
    private readonly _stateForm: RendezVousModelView
    private readonly _onLoadDisponibilitesObserver: LoadingObservableImpl;
    private readonly _hasErrorObserver: ErrorObservableImpl;
    private readonly _hasErrorDisponibilitesObserver: ErrorObservableImpl;

    constructor(
        readonly dependencies: RendezVousControllerDependencies
    ) {
        super();
        this._stateForm = window.history.state?.usr as RendezVousModelView;
        this.onDomaineSelected = this.onDomaineSelected.bind(this);
        this.onDemandeSelected = this.onDemandeSelected.bind(this);
        this.onCanalSelected = this.onCanalSelected.bind(this);
        this.onPrecisionChanged = this.onPrecisionChanged.bind(this);
        this.onJourSelected = this.onJourSelected.bind(this);
        this.loadDisponibilites = this.loadDisponibilites.bind(this);
        this.onHeureSelected = this.onHeureSelected.bind(this);
        this.onChoixConnexionSelected = this.onChoixConnexionSelected.bind(this);
        this._onLoadDisponibilitesObserver = new LoadingObservableImpl();
        this._hasErrorObserver = new ErrorObservableImpl();
        this._hasErrorDisponibilitesObserver = new ErrorObservableImpl();
        this._state = this._stateForm || {
            domaines: [],
            demandes: [],
            canal: [],
            choixConnexion: this.dependencies.choixConnexionService.getDefaultChoixConnexion(),
            disponibilites: DisponibilitesModelViewBuilder.buildEmpty(),
            rendezVous: RendezVousSelectionModelViewBuilder.buildEmpty(),
            pointAccueil: BandeauPointAccueilModelViewBuilder.buildEmpty(),
        };
    }

    private _state: RendezVousModelView;

    get state(): RendezVousModelView {
        return this._state;
    }

    get onLoadDisponibilitesObserver(): LoadingObservable {
        return this._onLoadDisponibilitesObserver;
    }

    get hasErrorObserver(): ErrorObservable {
        return this._hasErrorObserver;
    }

    get hasErrorDisponibilitesObserver(): ErrorObservableImpl {
        return this._hasErrorDisponibilitesObserver;
    }

    async onLoad() {
        const cdBuro = new URLSearchParams(window.location.search).get("b") || "";

        try {
            if (!this._stateForm) {
                this._pointAccueil = await this.dependencies.pointAccueilService.getPointAccueil(cdBuro);
                this._hasErrorObserver.raiseAdvancementEvent({hasError: false});
                this._domaines = await this.dependencies.domaineService.getDomaines();
                this._canal = await this.dependencies.canalService.getCanaux(cdBuro);
                this._state = {
                    ...this._state,
                    canal: this._canal.map(CanalModelViewBuilder.buildFromCanal),
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
            }
            this._onLoadDisponibilitesObserver.raiseAdvancementEvent({isOver: true});
        } catch (e) {
            this._hasErrorObserver.raiseAdvancementEvent({hasError: true});
        }
        this.raiseStateChanged();
    }

    async onDomaineSelected(domaineSelected: DomaineModelView) {
        try {
            this._hasErrorObserver.raiseAdvancementEvent({hasError: false});
            this._demandes = await this.dependencies.demandeService.getDemandes(domaineSelected.code);
            this._state = {
                ...this._state,
                demandes: this._demandes.map(DemandeModelViewBuilder.buildFromDemande),
                rendezVous: {
                    ...this._state.rendezVous,
                    demandeSelected: DemandeModelViewBuilder.buildEmpty(),
                    canalSelected: CanalModelViewBuilder.buildEmpty(),
                    choixConnexionSelected: ChoixConnexionModelViewBuilder.buildEmpty(),
                    heure: HeureDisponibleModelViewBuilder.buildEmpty(),
                    jour: new Date(),
                    afficherChoixConnexion: false,
                    afficherChoixCanaux: false,
                    precision: "",
                    domaineSelected
                }
            };
        } catch (error) {
            this._hasErrorObserver.raiseAdvancementEvent({hasError: true});
        }
        this.raiseStateChanged();
    }

    onDemandeSelected(demandeSelected: DemandeModelView) {
        this._state = {
            ...this._state,
            rendezVous: {
                ...this._state.rendezVous,
                canalSelected: CanalModelViewBuilder.buildEmpty(),
                choixConnexionSelected: ChoixConnexionModelViewBuilder.buildEmpty(),
                heure: HeureDisponibleModelViewBuilder.buildEmpty(),
                jour: new Date(),
                afficherChoixConnexion: false,
                afficherChoixCanaux: true,
                precision: "",
                demandeSelected,
            },
        };
        this.raiseStateChanged();
    }

    async onCanalSelected(canalSelected: CanalModelView) {
        this._state = {
            ...this._state,
            rendezVous: {
                ...this._state.rendezVous,
                choixConnexionSelected: ChoixConnexionModelViewBuilder.buildEmpty(),
                heure: HeureDisponibleModelViewBuilder.buildEmpty(),
                jour: new Date(),
                afficherChoixConnexion: false,
                precision: "",
                canalSelected,
            },
        };
        this.raiseStateChanged();
        await this.loadDisponibilites();
    }

    async loadDisponibilites(dtDebut = new Date()) {
        try {
            this._onLoadDisponibilitesObserver.raiseAdvancementEvent({isOver: false});
            this._hasErrorDisponibilitesObserver.raiseAdvancementEvent({hasError: false});
            const dtJour = new Date();

            if (dtDebut.getDate() === dtJour.getDate()) {
                dtDebut.setDate(dtJour.getDate() + 1);
            }

            this._disponibilites = await this.dependencies.rendezVousService.getDisponibilites(new DisponibilitesRequest({
                canalRendezVous: this._state.rendezVous.canalSelected.code,
                cdBuro: this._state.rendezVous.cdBuro,
                cdDemande: this._state.rendezVous.demandeSelected.code,
                cdDomaine: this._state.rendezVous.domaineSelected.code,
                dtDebut,
            }));

            this._state = {
                ...this._state,
                disponibilites: DisponibilitesModelViewBuilder.buildFromDisponibilites(this._disponibilites),
                rendezVous: {
                    ...this._state.rendezVous,
                    afficherChoixConnexion: false,
                    proposerChoixHoraire: false
                }
            }

            this._onLoadDisponibilitesObserver.raiseAdvancementEvent({isOver: true});
        } catch (error) {
            this._hasErrorDisponibilitesObserver.raiseAdvancementEvent({hasError: true});
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
                heure: HeureDisponibleModelViewBuilder.buildEmpty(),
                choixConnexionSelected: ChoixConnexionModelViewBuilder.buildEmpty(),
                jour: jourSelected,
                afficherChoixConnexion: false,
                proposerChoixHoraire: true
            }
        }
        this.raiseStateChanged();
    }

    onHeureSelected(heureSelected: HeureDisponibleModelView) {
        this._state = {
            ...this._state,
            rendezVous: {
                ...this._state.rendezVous,
                choixConnexionSelected: ChoixConnexionModelViewBuilder.buildEmpty(),
                afficherChoixConnexion: true,
                heure: heureSelected
            }
        }
        this.raiseStateChanged();
    }

    onChoixConnexionSelected(choixConnexionSelected: ChoixConnexionModelView) {
        this._state = {
            ...this._state,
            rendezVous: {
                ...this._state.rendezVous,
                choixConnexionSelected,
            }
        }
        this.raiseStateChanged();
    }
}
