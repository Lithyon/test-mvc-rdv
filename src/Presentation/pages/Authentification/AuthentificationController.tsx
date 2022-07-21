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
import {CommuneModelView} from "./ModelView/Commune/CommuneModelView";
import CommuneModelViewBuilder from "./ModelView/Commune/CommuneModelViewBuilder";
import Commune from "../../../Domain/Model/Commune/Commune";
import CommunesRequest from "../../../Domain/Model/Commune/CommunesRequest";
import {SituationFamilialeModelView} from "./ModelView/SituationFamiliale/SituationFamilialeModelView";
import {SituationFamilialeServiceImpl} from "../../../Domain/Services/SituationFamiliale";
import SituationFamiliale from "../../../Domain/Model/SituationFamiliale/SituationFamiliale";
import {IsLoadable} from "../../commons/IsLoadable";
import SituationFamilialeModelViewBuilder from "./ModelView/SituationFamiliale/SituationFamilialeModelViewBuilder";

enum AutoCompleteFieldCommuneEnum {
    NUMERO_CODE_POSTAL_MAX = 96000,
    TAILLE_MAX_CODE_POSTAL = 5
}

export interface AuthentificationModelView {
    readonly formError: FormErrorModelView,
    readonly creationCompte: CreationCompteModelView,
    readonly rendezVous: RendezVousSelectionModelView,
    readonly civilite: Array<CiviliteModelView>,
    readonly situationFamiliale: Array<SituationFamilialeModelView>,
    readonly parrainageChoix: Array<BooleanChoiceModelView>,
    readonly commune: CommuneModelView,
    readonly communes: Array<CommuneModelView>,
    readonly informationsCommercialesEmail: Array<BooleanChoiceModelView>,
    readonly informationsCommercialesSms: Array<BooleanChoiceModelView>,
    readonly informationsCommercialesTelephone: Array<BooleanChoiceModelView>,
}

interface AuthentificationControllerDependencies {
    readonly creationCompteService: CreationCompteServiceImpl,
    readonly situationFamilialeService: SituationFamilialeServiceImpl,
}

export default class AuthentificationController extends BaseController<AuthentificationModelView> implements IsLoadable {
    private _state: AuthentificationModelView;
    private _communes: Array<Commune> = [];
    private _situationFamiliale?: Array<SituationFamiliale>;

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
        this.onChangeDateNaissance = this.onChangeDateNaissance.bind(this);
        this.onChangeSituationFamiliale = this.onChangeSituationFamiliale.bind(this);
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
            situationFamiliale: [],
            parrainageChoix: DefaultBooleanChoice,
            commune: CommuneModelViewBuilder.buildEmpty(),
            communes: [],
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

    async onLoad() {
        this._situationFamiliale = await this.dependencies.situationFamilialeService.getSituationFamiliale();
        this._state = {
            ...this._state,
            situationFamiliale: this._situationFamiliale.map(SituationFamilialeModelViewBuilder.buildFromSituationFamiliale)
        };
        this.raiseStateChanged();
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
        let errorMessage = "";
        let communes: CommuneModelView[] = [];

        try {
            if (rechercheCommune !== "") {
                if (this.communeEstUnDomTom(rechercheCommune)) {
                    this._communes = await this.dependencies.creationCompteService.getCommunes(new CommunesRequest({
                        rechercheCommune,
                        lieuDit: true,
                        ancienNom: true,
                        pageSize: 10
                    }));

                    communes = this._communes.map(CommuneModelViewBuilder.buildFromCommune);

                    if (this._communes.length === 0) {
                        errorMessage = "La commune que vous avez saisie est inconnue. Veuillez à nouveau saisir un code postal ou un nom de commune.";
                    }
                } else {
                    errorMessage = "La commune doit être en France métropolitaine (département 01 à 95).";
                }
            }
        } catch (error) {
            errorMessage = "Une erreur est survenue lors de la récupération des communes.";
        }

        this._state = {
            ...this._state,
            communes,
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

    onChangeDateNaissance(dateNaissance: Date) {

        this._state = {
            ...this._state,
            creationCompte: {
                ...this._state.creationCompte,
                dateNaissance
            },
            formError: {
                ...this._state.formError,
                dateNaissance: ""
            }
        };
        this.raiseStateChanged();
    }

    onChangeSituationFamiliale(situationFamiliale: SituationFamilialeModelView) {
        this._state = {
            ...this._state,
            creationCompte: {
                ...this._state.creationCompte,
                situationFamiliale
            },
            formError: {
                ...this._state.formError,
                situationFamiliale: ""
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
