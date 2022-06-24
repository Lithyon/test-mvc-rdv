import BaseController from "../../commons/BaseController";
import RendezVousModelView from "../RendezVous/ModelView/RendezVous/RendezVousModelView";
import RendezVousSelectionModelView from "../RendezVous/ModelView/RendezVous/RendezVousSelectionModelView";
import {CreationCompteModelView} from "./ModelView/CreationCompte/CreationCompteModelView";
import {CiviliteModelView} from "./ModelView/Civilite/CiviliteModelView";
import CreationCompteModelViewBuilder from "./ModelView/CreationCompte/CreationCompteModelViewBuilder";
import {CiviliteServiceImpl} from "../../../Domain/Services/Civilite";
import {InformationsCommercialesServiceImpl} from "../../../Domain/Services/InformationsCommerciales";
import {InformationsCommercialesModelView} from "./ModelView/InformationsCommerciales/InformationsCommercialesModelView";
import {ParrainageChoixModelView} from "./ModelView/Parrainage/ParrainageChoixModelView";
import ParrainageNumeroSocietaireModelViewBuilder from "./ModelView/Parrainage/ParrainageNumeroSocietaireModelViewBuilder";
import {ParrainageNumeroSocietaireModelView} from "./ModelView/Parrainage/ParrainageNumeroSocietaireModelView";
import ParrainageServiceImpl from "../../../Domain/Services/Parrainage/ParrainageServiceImpl";
import CreationCompteServiceImpl from "../../../Domain/Services/CreationCompte/CreationCompteServiceImpl";

export interface AuthentificationModelView {
    readonly errors: {[key: string]: string},
    readonly creationCompte: CreationCompteModelView,
    readonly rendezVous: RendezVousSelectionModelView,
    readonly civilite: Array<CiviliteModelView>,
    readonly parrainageChoix: Array<ParrainageChoixModelView>,
    readonly parrainageNumeroSocietaire: ParrainageNumeroSocietaireModelView,
    readonly informationsCommercialesEmail: Array<InformationsCommercialesModelView>,
    readonly informationsCommercialesSms: Array<InformationsCommercialesModelView>,
    readonly informationsCommercialesTelephone: Array<InformationsCommercialesModelView>,
}

interface AuthentificationControllerDependencies {
    readonly creationCompteService: CreationCompteServiceImpl,
    readonly civiliteService: CiviliteServiceImpl,
    readonly parrainageService: ParrainageServiceImpl,
    readonly informationsCommercialesService: InformationsCommercialesServiceImpl,
}

export default class AuthentificationController extends BaseController<AuthentificationModelView> {
    private readonly _state: AuthentificationModelView;

    constructor(readonly dependencies: AuthentificationControllerDependencies) {
        super();
        const stateForm = window.history.state?.usr as RendezVousModelView;
        this.onValidationFormulaire = this.onValidationFormulaire.bind(this);
        this.onCiviliteSelected = this.onCiviliteSelected.bind(this);
        this.onParrainageChoixSelected = this.onParrainageChoixSelected.bind(this);
        this.onChangeParrainageNumeroSocietaire = this.onChangeParrainageNumeroSocietaire.bind(this);
        this.onInformationsCommercialesEmailSelected = this.onInformationsCommercialesEmailSelected.bind(this);
        this.onInformationsCommercialesSmsSelected = this.onInformationsCommercialesSmsSelected.bind(this);
        this.onInformationsCommercialesTelephoneSelected = this.onInformationsCommercialesTelephoneSelected.bind(this);
        this._state = {
            errors: {},
            creationCompte: CreationCompteModelViewBuilder.buildEmpty(),
            civilite: this.dependencies.civiliteService.getDefaultCivilite(),
            parrainageChoix: this.dependencies.parrainageService.getDefautParrainageChoix(),
            parrainageNumeroSocietaire: ParrainageNumeroSocietaireModelViewBuilder.buildEmpty(),
            informationsCommercialesEmail: this.dependencies.informationsCommercialesService.getDefaultInformationsCommerciales(),
            informationsCommercialesSms: this.dependencies.informationsCommercialesService.getDefaultInformationsCommerciales(),
            informationsCommercialesTelephone: this.dependencies.informationsCommercialesService.getDefaultInformationsCommerciales(),
            rendezVous: stateForm?.rendezVous
        };
    }

    get state(): AuthentificationModelView {
        return this._state;
    }

    onCiviliteSelected(civilite: CiviliteModelView) {
        delete this._state.errors.civilite;

        this._state = {
            ...this._state,
            creationCompte: {
                ...this._state.creationCompte,
                civilite
            }
        };
        this.raiseStateChanged();
    }

    onParrainageChoixSelected(parrainageChoix: ParrainageChoixModelView) {
        delete this._state.errors.numeroSocietaire;

        this._state = {
            ...this._state,
            creationCompte: {
                ...this._state.creationCompte,
                parrainageChoix
            }
        };
        this.raiseStateChanged();
    }

    onChangeParrainageNumeroSocietaire(numeroSocietaire: string) {
        delete this._state.errors.numeroSocietaire;

        this._state = {
            ...this._state,
            creationCompte: {
                ...this._state.creationCompte,
                parrainageNumeroSocietaire: {
                    ...this._state.creationCompte.parrainageNumeroSocietaire,
                    numeroSocietaire
                }
            }
        };
        this.raiseStateChanged();
    }

    onInformationsCommercialesEmailSelected(informationsCommercialesEmail: InformationsCommercialesModelView) {
        delete this._state.errors.informationsCommercialesEmail;

        this._state = {
            ...this._state,
            creationCompte: {
                ...this._state.creationCompte,
                informationsCommercialesEmail
            }
        };
        this.raiseStateChanged();
    }

    onInformationsCommercialesSmsSelected(informationsCommercialesSms: InformationsCommercialesModelView) {
        delete this._state.errors.informationsCommercialesSms;

        this._state = {
            ...this._state,
            creationCompte: {
                ...this._state.creationCompte,
                informationsCommercialesSms
            }
        };
        this.raiseStateChanged();
    }

    onInformationsCommercialesTelephoneSelected(informationsCommercialesTelephone: InformationsCommercialesModelView) {
        delete this._state.errors.informationsCommercialesTelephone;

        this._state = {
            ...this._state,
            creationCompte: {
                ...this._state.creationCompte,
                informationsCommercialesTelephone
            }
        };
        this.raiseStateChanged();
    }

    async onValidationFormulaire(): Promise<void> {
        // TODO : faire l'appel pour valider le formulaire

        this._state = {
            ...this._state,
            errors: this.dependencies.creationCompteService.validationFormulaire(this._state)
        };

        this.raiseStateChanged();
    }
}
