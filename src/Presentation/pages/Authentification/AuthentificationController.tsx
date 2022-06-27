import BaseController from "../../commons/BaseController";
import RendezVousModelView from "../RendezVous/ModelView/RendezVous/RendezVousModelView";
import RendezVousSelectionModelView from "../RendezVous/ModelView/RendezVous/RendezVousSelectionModelView";
import {CreationCompteModelView} from "./ModelView/CreationCompte/CreationCompteModelView";
import {CiviliteModelView} from "./ModelView/Civilite/CiviliteModelView";
import CreationCompteModelViewBuilder from "./ModelView/CreationCompte/CreationCompteModelViewBuilder";
import ParrainageNumeroSocietaireModelViewBuilder from "./ModelView/Parrainage/ParrainageNumeroSocietaireModelViewBuilder";
import {ParrainageNumeroSocietaireModelView} from "./ModelView/Parrainage/ParrainageNumeroSocietaireModelView";
import CreationCompteServiceImpl from "../../../Domain/Services/CreationCompte/CreationCompteServiceImpl";
import {FormErrorModelView} from "./ModelView/FormError/FormErrorModelView";
import FormErrorModelViewBuilder from "./ModelView/FormError/FormErrorModelViewBuilder";
import {DefaultCivilite} from "../../../Domain/Data/Enum/DefaultCivilite";
import {DefaultBooleanChoice} from "../../../Domain/Data/Enum/BooleanChoice";
import {BooleanChoiceModelView} from "../../commons/ModelView/BooleanChoice/BooleanChoiceModelView";

export interface AuthentificationModelView {
    readonly formError: FormErrorModelView,
    readonly creationCompte: CreationCompteModelView,
    readonly rendezVous: RendezVousSelectionModelView,
    readonly civilite: Array<CiviliteModelView>,
    readonly parrainageChoix: Array<BooleanChoiceModelView>,
    readonly parrainageNumeroSocietaire: ParrainageNumeroSocietaireModelView,
    readonly informationsCommercialesEmail: Array<BooleanChoiceModelView>,
    readonly informationsCommercialesSms: Array<BooleanChoiceModelView>,
    readonly informationsCommercialesTelephone: Array<BooleanChoiceModelView>,
}

interface AuthentificationControllerDependencies {
    readonly creationCompteService: CreationCompteServiceImpl,
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
            formError: FormErrorModelViewBuilder.buildEmpty(),
            creationCompte: CreationCompteModelViewBuilder.buildEmpty(),
            civilite: DefaultCivilite,
            parrainageChoix: DefaultBooleanChoice,
            parrainageNumeroSocietaire: ParrainageNumeroSocietaireModelViewBuilder.buildEmpty(),
            informationsCommercialesEmail: DefaultBooleanChoice,
            informationsCommercialesSms: DefaultBooleanChoice,
            informationsCommercialesTelephone: DefaultBooleanChoice,
            rendezVous: stateForm?.rendezVous
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
        delete this._state.formError.errors.numeroSocietaire;

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
        delete this._state.formError.errors.numeroSocietaire;

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

    async onValidationFormulaire() {
        // TODO : faire l'appel pour valider le formulaire

        this._state = {
            ...this._state,
            formError: this.dependencies.creationCompteService.validationFormulaire(this._state.creationCompte)
        };
        // show modal

        this.raiseStateChanged();
    }
}
