import BaseController from "../../commons/BaseController";
import RendezVousModelView from "../RendezVous/ModelView/RendezVous/RendezVousModelView";
import RendezVousSelectionModelView from "../RendezVous/ModelView/RendezVous/RendezVousSelectionModelView";
import {CreationCompteModelView} from "./ModelView/CreationCompte/CreationCompteModelView";
import {CiviliteModelView} from "./ModelView/Civilite/CiviliteModelView";
import CreationCompteModelViewBuilder from "./ModelView/CreationCompte/CreationCompteModelViewBuilder";
import CreationCompteServiceImpl from "../../../Domain/Services/CreationCompte/CreationCompteServiceImpl";
import {FormErrorModelView} from "./ModelView/FormError/FormErrorModelView";
import {DefaultCivilite} from "../../../Domain/Data/Enum/DefaultCivilite";
import {DefaultBooleanChoice} from "../../../Domain/Data/Enum/BooleanChoice";
import {BooleanChoiceModelView} from "../../commons/ModelView/BooleanChoice/BooleanChoiceModelView";
import RendezVousSelectionModelViewBuilder from "../RendezVous/ModelView/RendezVous/RendezVousSelectionModelViewBuilder";
import FormErrorModelViewBuilder from "./ModelView/FormError/FormErrorModelViewBuilder";

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

        this.formHasError = this.formHasError.bind(this);
        this.onCreationCompte = this.onCreationCompte.bind(this);
        this.onCiviliteSelected = this.onCiviliteSelected.bind(this);
        this.onChangeNom = this.onChangeNom.bind(this);
        this.onChangePrenom = this.onChangePrenom.bind(this);
        this.onChangeNumeroTelephone = this.onChangeNumeroTelephone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
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
            // TODO : A REVOIR SI BESOIN
            rendezVous: stateForm?.rendezVous || RendezVousSelectionModelViewBuilder.buildEmpty()
        };
    }

    get state(): AuthentificationModelView {
        return this._state;
    }

    formHasError() {
        return this.dependencies.creationCompteService.formHasError(this._state.formError);
    }

    onCiviliteSelected(civilite: CiviliteModelView) {
        this._state = {
            ...this._state,
            creationCompte: {
                ...this._state.creationCompte,
                civilite
            },
            formError: {
                ...this._state.formError,
                civilite: ""
            }
        };
        this.raiseStateChanged();
    }

    onParrainageChoixSelected(parrainageChoix: BooleanChoiceModelView) {
        this._state = {
            ...this._state,
            creationCompte: {
                ...this._state.creationCompte,
                parrainageChoix
            },
            formError: {
                ...this._state.formError,
                noSocietaireParrain: ""
            }
        };
        this.raiseStateChanged();
    }

    onChangeParrainageNumeroSocietaire(noSocietaireParrain: string) {
        this._state = {
            ...this._state,
            rendezVous: {
                ...this._state.rendezVous,
                noSocietaireParrain
            },
            formError: {
                ...this._state.formError,
                noSocietaireParrain: ""
            }
        };
        this.raiseStateChanged();
    }

    onInformationsCommercialesEmailSelected(informationsCommercialesEmail: BooleanChoiceModelView) {
        this._state = {
            ...this._state,
            creationCompte: {
                ...this._state.creationCompte,
                informationsCommercialesEmail
            },
            formError: {
                ...this._state.formError,
                informationsCommercialesEmail: ""
            }
        };
        this.raiseStateChanged();
    }

    onInformationsCommercialesSmsSelected(informationsCommercialesSms: BooleanChoiceModelView) {
        this._state = {
            ...this._state,
            creationCompte: {
                ...this._state.creationCompte,
                informationsCommercialesSms
            },
            formError: {
                ...this._state.formError,
                informationsCommercialesSms: ""
            }
        };
        this.raiseStateChanged();
    }

    onInformationsCommercialesTelephoneSelected(informationsCommercialesTelephone: BooleanChoiceModelView) {
        this._state = {
            ...this._state,
            creationCompte: {
                ...this._state.creationCompte,
                informationsCommercialesTelephone
            },
            formError: {
                ...this._state.formError,
                informationsCommercialesTelephone: ""
            }
        };
        this.raiseStateChanged();
    }

    onChangeNom(nom: string) {
        this._state = {
            ...this._state,
            creationCompte: {
                ...this._state.creationCompte,
                nom
            },
            formError: {
                ...this._state.formError,
                nom: ""
            }
        };

        this.raiseStateChanged();
    }

    onChangePrenom(prenom: string) {
        this._state = {
            ...this._state,
            creationCompte: {
                ...this._state.creationCompte,
                prenom
            },
            formError: {
                ...this._state.formError,
                prenom: ""
            }
        };
        this.raiseStateChanged();
    }

    onChangeNumeroTelephone(numeroTelephone: string) {
        this._state = {
            ...this._state,
            creationCompte: {
                ...this._state.creationCompte,
                numeroTelephone
            },
            formError: {
                ...this._state.formError,
                numeroTelephone: ""
            }
        };

        this.raiseStateChanged();
    }

    onChangeEmail(email: string) {
        this._state = {
            ...this._state,
            creationCompte: {
                ...this._state.creationCompte,
                email
            },
            formError: {
                ...this._state.formError,
                email: ""
            }
        };

        this.raiseStateChanged();
    }

    async onCreationCompte() {
        const formError = await this.dependencies.creationCompteService.creationCompte(this._state.creationCompte, this._state.rendezVous);

        this._state = {
            ...this._state,
            formError
        };
        this.raiseStateChanged();
    }
}
