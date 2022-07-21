import BaseController from "../../commons/BaseController";
import RendezVousModelView from "../RendezVous/ModelView/RendezVous/RendezVousModelView";
import RendezVousSelectionModelView from "../RendezVous/ModelView/RendezVous/RendezVousSelectionModelView";
import {CreationCompteModelView} from "./ModelView/CreationCompte/CreationCompteModelView";
import {CiviliteModelView} from "./ModelView/Civilite/CiviliteModelView";
import CreationCompteModelViewBuilder from "./ModelView/CreationCompte/CreationCompteModelViewBuilder";
import CreationCompteServiceImpl from "../../../Domain/Services/CreationCompte/CreationCompteServiceImpl";
import FormErrorModelView from "./ModelView/FormError/FormErrorModelView";
import {DefaultCivilite} from "../../../Domain/Data/Enum/DefaultCivilite";
import {DefaultBooleanChoice} from "../../../Domain/Data/Enum/BooleanChoice";
import {BooleanChoiceModelView} from "../../commons/ModelView/BooleanChoice/BooleanChoiceModelView";
import RendezVousSelectionModelViewBuilder from "../RendezVous/ModelView/RendezVous/RendezVousSelectionModelViewBuilder";
import FormErrorModelViewBuilder from "./ModelView/FormError/FormErrorModelViewBuilder";
import {CommunesModelView} from "./ModelView/Communes/CommunesModelView";
import CommunesModelViewBuilder from "./ModelView/Communes/CommunesModelViewBuilder";
import CommuneModelViewBuilder from "./ModelView/Communes/CommuneModelViewBuilder";
import Communes from "../../../Domain/Model/Communes/Communes";
import {CommuneModelView} from "./ModelView/Communes/CommuneModelView";
import CommunesRequest from "../../../Domain/Model/Communes/CommunesRequest";

enum AutoCompleteFieldCommuneEnum {
    NUMERO_CODE_POSTAL_MAX = 96000,
    TAILLE_MAX_CODE_POSTAL = 5
}

export interface AuthentificationModelView {
    readonly formError: FormErrorModelView,
    readonly creationCompte: CreationCompteModelView,
    readonly rendezVous: RendezVousSelectionModelView,
    readonly civilite: Array<CiviliteModelView>,
    readonly parrainageChoix: Array<BooleanChoiceModelView>,
    readonly commune: CommuneModelView,
    readonly communes: CommunesModelView,
    readonly informationsCommercialesEmail: Array<BooleanChoiceModelView>,
    readonly informationsCommercialesSms: Array<BooleanChoiceModelView>,
    readonly informationsCommercialesTelephone: Array<BooleanChoiceModelView>,
}

interface AuthentificationControllerDependencies {
    readonly creationCompteService: CreationCompteServiceImpl,
}

export default class AuthentificationController extends BaseController<AuthentificationModelView> {
    private _state: AuthentificationModelView;
    private _communes?: Communes;

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
        this.onCommuneSelected = this.onCommuneSelected.bind(this);
        this.onRechercheCommune = this.onRechercheCommune.bind(this);
        this.onChangeParrainageNumeroSocietaire = this.onChangeParrainageNumeroSocietaire.bind(this);
        this.onInformationsCommercialesEmailSelected = this.onInformationsCommercialesEmailSelected.bind(this);
        this.onInformationsCommercialesSmsSelected = this.onInformationsCommercialesSmsSelected.bind(this);
        this.onInformationsCommercialesTelephoneSelected = this.onInformationsCommercialesTelephoneSelected.bind(this);

        this._state = {
            formError: FormErrorModelViewBuilder.buildEmpty(),
            creationCompte: CreationCompteModelViewBuilder.buildEmpty(),
            civilite: DefaultCivilite,
            parrainageChoix: DefaultBooleanChoice,
            commune: CommuneModelViewBuilder.buildEmpty(),
            communes: CommunesModelViewBuilder.buildEmpty(),
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

    communeEstUnDomTom(rechercheCommune: string): boolean {
        const codePostal = parseInt(rechercheCommune, 10);

        return rechercheCommune.length < AutoCompleteFieldCommuneEnum.TAILLE_MAX_CODE_POSTAL
            || codePostal < AutoCompleteFieldCommuneEnum.NUMERO_CODE_POSTAL_MAX
            || isNaN(codePostal);
    }

    async onRechercheCommune(rechercheCommune: string) {
        let buildCommunes = CommunesModelViewBuilder.buildEmpty();
        let errorMessage = "";

        if (rechercheCommune !== "") {
            if (this.communeEstUnDomTom(rechercheCommune)) {
                this._communes = await this.dependencies.creationCompteService.getCommunes(new CommunesRequest({
                    rechercheCommune,
                    lieuDit: true,
                    ancienNom: true,
                    pageSize: 10
                }));

                buildCommunes = CommunesModelViewBuilder.buildFromCommunes(this._communes);

                if (buildCommunes.communes.length === 0) {
                    errorMessage = "La commune que vous avez saisie est inconnue. Veuillez à nouveau saisir un code postal ou un nom de commune.";
                }
            } else {
                errorMessage = "La commune doit être en France métropolitaine (département 01 à 95).";
            }
        }

        this._state = {
            ...this._state,
            communes: buildCommunes,
            formError: {
                ...this._state.formError,
                commune: errorMessage
            }
        };

        this.raiseStateChanged();
    }

    onCommuneSelected(commune: CommuneModelView) {
        this._state = {
            ...this._state,
            creationCompte: {
                ...this._state.creationCompte,
                commune
            },
            formError: {
                ...this._state.formError,
                commune: ""
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
