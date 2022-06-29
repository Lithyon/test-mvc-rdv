import BaseController from "../../commons/BaseController";
import RendezVousModelView from "../RendezVous/ModelView/RendezVous/RendezVousModelView";
import RendezVousSelectionModelView from "../RendezVous/ModelView/RendezVous/RendezVousSelectionModelView";
import {CreationCompteModelView} from "./ModelView/CreationCompte/CreationCompteModelView";
import {CiviliteModelView} from "./ModelView/Civilite/CiviliteModelView";
import CreationCompteModelViewBuilder from "./ModelView/CreationCompte/CreationCompteModelViewBuilder";
import CreationCompteServiceImpl from "../../../Domain/Services/CreationCompte/CreationCompteServiceImpl";
import {FormErrorModelView} from "./ModelView/FormError/FormErrorModelView";
import FormErrorModelViewBuilder from "./ModelView/FormError/FormErrorModelViewBuilder";
import {DefaultCivilite} from "../../../Domain/Data/Enum/DefaultCivilite";
import {DefaultBooleanChoice} from "../../../Domain/Data/Enum/BooleanChoice";
import {BooleanChoiceModelView} from "../../commons/ModelView/BooleanChoice/BooleanChoiceModelView";
import RendezVousSelectionModelViewBuilder
    from "../RendezVous/ModelView/RendezVous/RendezVousSelectionModelViewBuilder";

export interface AuthentificationModelView {
    readonly formError: FormErrorModelView,
    readonly creationCompte: CreationCompteModelView,
    readonly rendezVous: RendezVousSelectionModelView,
    readonly civilite: Array<CiviliteModelView>,
    readonly parrainageChoix: Array<BooleanChoiceModelView>,
    readonly informationsCommercialesEmail: Array<BooleanChoiceModelView>,
    readonly informationsCommercialesSms: Array<BooleanChoiceModelView>,
    readonly informationsCommercialesTelephone: Array<BooleanChoiceModelView>,
}

interface AuthentificationControllerDependencies {
    readonly creationCompteService: CreationCompteServiceImpl,
}

export default class AuthentificationController extends BaseController<AuthentificationModelView> {
    private _state: AuthentificationModelView;

    constructor(readonly dependencies: AuthentificationControllerDependencies) {
        super();
        const stateForm = window.history.state?.usr as RendezVousModelView;
        this.onCreationCompte = this.onCreationCompte.bind(this);
        this.onCiviliteSelected = this.onCiviliteSelected.bind(this);
        this.onParrainageChoixSelected = this.onParrainageChoixSelected.bind(this);
        this.onChangeParrainageNumeroSocietaire = this.onChangeParrainageNumeroSocietaire.bind(this);
        this.onInformationsCommercialesEmailSelected = this.onInformationsCommercialesEmailSelected.bind(this);
        this.onInformationsCommercialesSmsSelected = this.onInformationsCommercialesSmsSelected.bind(this);
        this.onInformationsCommercialesTelephoneSelected = this.onInformationsCommercialesTelephoneSelected.bind(this);
        this._state = {
            formError: FormErrorModelViewBuilder.buildEmpty(),
            creationCompte: CreationCompteModelViewBuilder.buildEmpty(),
            civilite: DefaultCivilite,
            parrainageChoix: DefaultBooleanChoice,
            informationsCommercialesEmail: DefaultBooleanChoice,
            informationsCommercialesSms: DefaultBooleanChoice,
            informationsCommercialesTelephone: DefaultBooleanChoice,
            //TODO A REVOIR SI BESOIN
            rendezVous: stateForm?.rendezVous || RendezVousSelectionModelViewBuilder.buildEmpty(),
        };
    }

    get state(): AuthentificationModelView {
        return this._state;
    }

    onCiviliteSelected(civilite: CiviliteModelView) {
        delete this._state.formError.errors.civilite;

        this._state = {
            ...this._state,
            creationCompte: {
                ...this._state.creationCompte,
                civilite
            }
        };
        this.raiseStateChanged();
    }

    onParrainageChoixSelected(parrainageChoix: BooleanChoiceModelView) {
        delete this._state.formError.errors.noSocietaireParrain;

        this._state = {
            ...this._state,
            creationCompte: {
                ...this._state.creationCompte,
                parrainageChoix
            }
        };
        this.raiseStateChanged();
    }

    onChangeParrainageNumeroSocietaire(noSocietaireParrain: string) {
        delete this._state.formError.errors.noSocietaireParrain;

        this._state = {
            ...this._state,
            rendezVous: {
                ...this._state.rendezVous,
                noSocietaireParrain
            }
        };
        this.raiseStateChanged();
    }

    onInformationsCommercialesEmailSelected(informationsCommercialesEmail: BooleanChoiceModelView) {
        delete this._state.formError.errors.informationsCommercialesEmail;

        this._state = {
            ...this._state,
            creationCompte: {
                ...this._state.creationCompte,
                informationsCommercialesEmail
            }
        };
        this.raiseStateChanged();
    }

    onInformationsCommercialesSmsSelected(informationsCommercialesSms: BooleanChoiceModelView) {
        delete this._state.formError.errors.informationsCommercialesSms;

        this._state = {
            ...this._state,
            creationCompte: {
                ...this._state.creationCompte,
                informationsCommercialesSms
            }
        };
        this.raiseStateChanged();
    }

    onInformationsCommercialesTelephoneSelected(informationsCommercialesTelephone: BooleanChoiceModelView) {
        delete this._state.formError.errors.informationsCommercialesTelephone;

        this._state = {
            ...this._state,
            creationCompte: {
                ...this._state.creationCompte,
                informationsCommercialesTelephone
            }
        };
        this.raiseStateChanged();
    }

    async onCreationCompte() {
        const formError = await this.dependencies.creationCompteService.creationCompte(this._state.creationCompte, this._state.rendezVous)
        this._state = {
            ...this._state,
            formError
        };
        this.raiseStateChanged();
    }
}
