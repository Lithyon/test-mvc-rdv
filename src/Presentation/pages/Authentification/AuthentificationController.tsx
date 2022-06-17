import BaseController from "../../commons/BaseController";
import RendezVousModelView from "../RendezVous/ModelView/RendezVous/RendezVousModelView";
import RendezVousSelectionModelView from "../RendezVous/ModelView/RendezVous/RendezVousSelectionModelView";
import {CreationCompteModelView} from "./ModelView/CreationCompte/CreationCompteModelView";
import {CiviliteModelView} from "./ModelView/Civilite/CiviliteModelView";
import CreationCompteModelViewBuilder from "./ModelView/CreationCompte/CreationCompteModelViewBuilder";
import {CiviliteServiceImpl} from "../../../Domain/Services/Civilite";
import {InformationsCommercialesServiceImpl} from "../../../Domain/Services/InformationsCommerciales";
import {InformationsCommercialesModelView} from "./ModelView/InformationsCommerciales/InformationsCommercialesModelView";

interface AuthentificationModelView {
    readonly creationCompte: CreationCompteModelView,
    readonly rendezVous: RendezVousSelectionModelView,
    readonly civilite: Array<CiviliteModelView>,
    readonly informationsCommercialesEmail: Array<InformationsCommercialesModelView>,
    readonly informationsCommercialesSms: Array<InformationsCommercialesModelView>,
    readonly informationsCommercialesTelephone: Array<InformationsCommercialesModelView>,
}

interface AuthentificationControllerDependencies {
    readonly civiliteService: CiviliteServiceImpl,
    readonly informationsCommercialesService: InformationsCommercialesServiceImpl,
}

export default class AuthentificationController extends BaseController<AuthentificationModelView> {
    private readonly _state: AuthentificationModelView;

    constructor(readonly dependencies: AuthentificationControllerDependencies) {
        super();
        const stateForm = window.history.state?.usr as RendezVousModelView;
        this.onCiviliteSelected = this.onCiviliteSelected.bind(this);
        this.onInformationsCommercialesEmailSelected = this.onInformationsCommercialesEmailSelected.bind(this);
        this.onInformationsCommercialesSmsSelected = this.onInformationsCommercialesSmsSelected.bind(this);
        this.onInformationsCommercialesTelephoneSelected = this.onInformationsCommercialesTelephoneSelected.bind(this);
        this._state = {
            creationCompte: CreationCompteModelViewBuilder.buildEmpty(),
            civilite: this.dependencies.civiliteService.getDefaultCivilite(),
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
        this._state = {
            ...this._state,
            creationCompte: {
                ...this._state.creationCompte,
                civilite: civilite
            }
        }
        this.raiseStateChanged();
    }

    onInformationsCommercialesEmailSelected(informationsCommercialesEmail: InformationsCommercialesModelView) {
        this._state = {
            ...this._state,
            creationCompte: {
                ...this._state.creationCompte,
                informationsCommercialesEmail: informationsCommercialesEmail
            }
        }
        this.raiseStateChanged();
    }

    onInformationsCommercialesSmsSelected(informationsCommercialesSms: InformationsCommercialesModelView) {
        this._state = {
            ...this._state,
            creationCompte: {
                ...this._state.creationCompte,
                informationsCommercialesSms: informationsCommercialesSms
            }
        }
        this.raiseStateChanged();
    }

    onInformationsCommercialesTelephoneSelected(informationsCommercialesTelephone: InformationsCommercialesModelView) {
        this._state = {
            ...this._state,
            creationCompte: {
                ...this._state.creationCompte,
                informationsCommercialesTelephone: informationsCommercialesTelephone
            }
        }
        this.raiseStateChanged();
    }
}
