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
import {ProfessionModelView} from "./ModelView/Profession/ProfessionModelView";
import ProfessionModelViewBuilder from "./ModelView/Profession/ProfessionModelViewBuilder";
import {ProfessionServiceImpl} from "../../../Domain/Services/Profession";
import Profession from "../../../Domain/Model/Profession/Profession";
import {PourVousJoindreModelView} from "./ModelView/PourVousJoindre/PourVousJoindreModelView";
import PourVousJoindreModelViewBuilder from "./ModelView/PourVousJoindre/PourVousJoindreModelViewBuilder";
import {ChoixContactModelView} from "./ModelView/PourVousJoindre/ChoixContactModelView";
import {ContactServiceImpl} from "../../../Domain/Services/Contact";
import Contact from "../../../Domain/Model/Contact/Contact";
import ContactModelViewBuilder from "./ModelView/Contact/ContactModelViewBuilder";
import ContactModelView from "./ModelView/Contact/ContactModelView";
import {RendezVousServiceImpl} from "../../../Domain/Services/RendezVous";
import FormErrorPourVousJoindreModelView from "./ModelView/FormError/FormErrorPourVousJoindreModelView";
import FormErrorPourVousJoindreModelViewBuilder from "./ModelView/FormError/FormErrorPourVousJoindreModelViewBuilder";
import LoadingObservableImpl from "../../commons/Impl/LoadingObservableImpl";
import {LoadingObservable} from "../../commons/LoadingObservable";
import ErrorObservableImpl from "../../commons/Impl/ErrorObservableImpl";
import {ErrorObservable} from "../../commons/ErrorObservable";
import {InfosModaleModelView} from "../../commons/ModelView/InfosModale/InfosModaleModelView";
import InfosModaleModelViewBuilder from "../../commons/ModelView/InfosModale/InfosModaleModelViewBuilder";
import {CodeMessageApplicatif} from "../../../Domain/Data/Enum/CodeMessageApplicatif";
import {AuthentificationServiceImpl} from "../../../Domain/Services/Authentification";
import RendezVousModelViewBuilder from "../RendezVous/ModelView/RendezVous/RendezVousModelViewBuilder";

const NUMERO_CODE_POSTAL_MAX = "96000";

export interface AuthentificationModelView {
    readonly estConnecte: boolean,
    readonly formError: FormErrorModelView,
    readonly formErrorPourVousJoindre: FormErrorPourVousJoindreModelView,
    readonly creationCompte: CreationCompteModelView,
    readonly rendezVous: RendezVousSelectionModelView,
    readonly civilite: Array<CiviliteModelView>,
    readonly situationFamiliale: Array<SituationFamilialeModelView>,
    readonly profession: Array<ProfessionModelView>,
    readonly parrainageChoix: Array<BooleanChoiceModelView>,
    readonly commune: CommuneModelView,
    readonly communes: Array<CommuneModelView>,
    readonly informationsCommercialesEmail: Array<BooleanChoiceModelView>,
    readonly informationsCommercialesSms: Array<BooleanChoiceModelView>,
    readonly informationsCommercialesTelephone: Array<BooleanChoiceModelView>,
    readonly pourVousJoindre: PourVousJoindreModelView,
    readonly infosContact: ContactModelView,
    readonly afficherModaleConfirmation: boolean,
    readonly afficherModalModificationEmail: boolean,
}

interface AuthentificationControllerDependencies {
    readonly rendezVousService: RendezVousServiceImpl,
    readonly creationCompteService: CreationCompteServiceImpl,
    readonly situationFamilialeService: SituationFamilialeServiceImpl,
    readonly professionService: ProfessionServiceImpl,
    readonly contactService: ContactServiceImpl,
    readonly authentificationService: AuthentificationServiceImpl
}

export default class AuthentificationController extends BaseController<AuthentificationModelView> implements IsLoadable {
    private _communes: Array<Commune> = [];
    private _situationFamiliale?: Array<SituationFamiliale>;
    private _profession?: Array<Profession>;
    private _infosContact?: Contact;
    private readonly _onLoadAuthentificationObserver: LoadingObservableImpl;
    private readonly _hasErrorObserver: ErrorObservableImpl;
    private readonly _hasErrorDejaUnCompteObserver: ErrorObservableImpl;
    private readonly _stateForm: RendezVousModelView;

    constructor(readonly dependencies: AuthentificationControllerDependencies) {
        super();
        // FIXME a externaliser dans abstract aussi
        const sessionStorageState = sessionStorage.getItem("formulaire_creation_rdv")
        this._stateForm = window.history.state?.usr as RendezVousModelView;
        if (sessionStorageState) {
            this._stateForm = RendezVousModelViewBuilder.buildFromSessionStorage(JSON.parse(sessionStorageState));
        }
        this.formHasError = this.formHasError.bind(this);
        this.verificationErreursPourVousJoindre = this.verificationErreursPourVousJoindre.bind(this);
        this.onCreationCompte = this.onCreationCompte.bind(this);
        this.onCreationRendezVous = this.onCreationRendezVous.bind(this);
        this.onCiviliteSelected = this.onCiviliteSelected.bind(this);
        this.onChangeNom = this.onChangeNom.bind(this);
        this.onChangePrenom = this.onChangePrenom.bind(this);
        this.onChangeNumeroTelephone = this.onChangeNumeroTelephone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeDateNaissance = this.onChangeDateNaissance.bind(this);
        this.onChangeSituationFamiliale = this.onChangeSituationFamiliale.bind(this);
        this.onChangeProfession = this.onChangeProfession.bind(this);
        this.onParrainageChoixSelected = this.onParrainageChoixSelected.bind(this);
        this.onCommuneSelected = this.onCommuneSelected.bind(this);
        this.onRechercheCommune = this.onRechercheCommune.bind(this);
        this.onChangeParrainageNumeroSocietaire = this.onChangeParrainageNumeroSocietaire.bind(this);
        this.onInformationsCommercialesEmailSelected = this.onInformationsCommercialesEmailSelected.bind(this);
        this.onInformationsCommercialesSmsSelected = this.onInformationsCommercialesSmsSelected.bind(this);
        this.onInformationsCommercialesTelephoneSelected = this.onInformationsCommercialesTelephoneSelected.bind(this);
        this.onChoixContactSelected = this.onChoixContactSelected.bind(this);
        this.onTelephonePourVousJoindreChanged = this.onTelephonePourVousJoindreChanged.bind(this);
        this.onEmailPourVousJoindreChanged = this.onEmailPourVousJoindreChanged.bind(this);
        this.onLoadPourVousJoindre = this.onLoadPourVousJoindre.bind(this);
        this.redirectionMireDeConnexion = this.redirectionMireDeConnexion.bind(this);
        this.onAfficherModaleModificationEmail = this.onAfficherModaleModificationEmail.bind(this);
        this._onLoadAuthentificationObserver = new LoadingObservableImpl();
        this._hasErrorObserver = new ErrorObservableImpl();
        this._hasErrorDejaUnCompteObserver = new ErrorObservableImpl();

        this._state = {
            estConnecte: false,
            formError: FormErrorModelViewBuilder.buildEmpty(),
            formErrorPourVousJoindre: FormErrorPourVousJoindreModelViewBuilder.buildEmpty(),
            creationCompte: CreationCompteModelViewBuilder.buildEmpty(),
            civilite: DefaultCivilite,
            situationFamiliale: [],
            profession: [],
            parrainageChoix: DefaultBooleanChoice,
            commune: CommuneModelViewBuilder.buildEmpty(),
            communes: [],
            informationsCommercialesEmail: DefaultBooleanChoice,
            informationsCommercialesSms: DefaultBooleanChoice,
            informationsCommercialesTelephone: DefaultBooleanChoice,
            rendezVous: this._stateForm?.rendezVous || RendezVousSelectionModelViewBuilder.buildEmpty(),
            pourVousJoindre: PourVousJoindreModelViewBuilder.buildEmpty(),
            infosContact: ContactModelViewBuilder.buildEmpty(),
            afficherModaleConfirmation: false,
            afficherModalModificationEmail: false,
        };
    }

    private _state: AuthentificationModelView;

    get state(): AuthentificationModelView {
        return this._state;
    }

    get onLoadAuthentificationObserver(): LoadingObservable {
        return this._onLoadAuthentificationObserver;
    }

    get hasErrorObserver(): ErrorObservable {
        return this._hasErrorObserver;
    }

    get hasErrorDejaUnCompteObserver(): ErrorObservable {
        return this._hasErrorDejaUnCompteObserver;
    }

    formHasError() {
        return this.dependencies.creationCompteService.formHasError(this._state.formError);
    }

    verificationErreursPourVousJoindre() {
        return this.dependencies.rendezVousService.formHasError(this._state.formErrorPourVousJoindre);
    }

    async onLoad() {
        try {
            this._hasErrorObserver.raiseAdvancementEvent({hasError: false});
            this._situationFamiliale = await this.dependencies.situationFamilialeService.getSituationFamiliale();
            this._profession = await this.dependencies.professionService.getProfession();
            this._state = {
                ...this._state,
                situationFamiliale: this._situationFamiliale.map(SituationFamilialeModelViewBuilder.buildFromSituationFamiliale),
                profession: this._profession.map(ProfessionModelViewBuilder.buildFromProfession)
            };

            await this.onLoadPourVousJoindre();
        } catch (e) {
            this._hasErrorObserver.raiseAdvancementEvent({hasError: true});
        }
        this._onLoadAuthentificationObserver.raiseAdvancementEvent({isOver: true});
        this.raiseStateChanged();
    }

    async onLoadPourVousJoindre() {
        try {
            this._infosContact = new Contact(await this.dependencies.contactService.getContact());
            const infosContact = ContactModelViewBuilder.buildFromContact(this._infosContact);

            this._state = {
                ...this._state,
                infosContact,
                estConnecte: true,
                pourVousJoindre: PourVousJoindreModelViewBuilder.buildFromPourVousJoindre(infosContact)
            };
        } catch (e: any) {
            if (e.message !== "Utilisateur non connecté") {
                this._hasErrorObserver.raiseAdvancementEvent({hasError: true});
            }
        }
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
                nom: nom.trim()
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
                prenom: prenom.trim()
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
                email: email.trim()
            },
            formError: {
                ...this._state.formError,
                email: ""
            }
        };

        this.raiseStateChanged();
    }

    communeEstValide(rechercheCommune: string): boolean {
        const matchCodePostal = rechercheCommune.match(/^\d{1,5}/) || [];

        if (matchCodePostal[0]) {
            const codePostal = parseInt(matchCodePostal[0], 10);
            const debutCodePostalMax = parseInt(NUMERO_CODE_POSTAL_MAX.substring(0, codePostal.toString().length), 10);

            if (codePostal.toString().length < 5) {
                return codePostal <= debutCodePostalMax;
            }

            return codePostal < debutCodePostalMax;
        }

        return true;
    }

    async onRechercheCommune(rechercheCommune: string) {
        let errorMessage = "";
        let communes: CommuneModelView[] = [];

        if (rechercheCommune !== "") {
            if (this.communeEstValide(rechercheCommune)) {
                try {
                    this._communes = await this.dependencies.creationCompteService.getCommunes(new CommunesRequest({
                        rechercheCommune,
                        lieuDit: true,
                        ancienNom: true,
                        pageSize: 10
                    }));

                    communes = this._communes.map(CommuneModelViewBuilder.buildFromCommune);

                    if (this._communes.length === 0) {
                        errorMessage =
                            "La commune que vous avez saisie est inconnue. Veuillez à nouveau saisir un code postal ou un nom de commune.";
                    }
                } catch (error) {
                    errorMessage = "Une erreur est survenue lors de la récupération des communes.";
                }
            } else {
                errorMessage = "La commune doit être en France métropolitaine (département 01 à 95).";
            }
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

    onChangeProfession(profession: ProfessionModelView) {
        this._state = {
            ...this._state,
            creationCompte: {
                ...this._state.creationCompte,
                profession
            },
            formError: {
                ...this._state.formError,
                profession: ""
            }
        };
        this.raiseStateChanged();
    }

    onChoixContactSelected(choixContact: ChoixContactModelView) {
        this._state = {
            ...this._state,
            pourVousJoindre: {
                ...this._state.pourVousJoindre,
                choixContact,
                noTel: "",
                adresseMail: ""
            },
            formErrorPourVousJoindre: {
                ...this._state.formErrorPourVousJoindre,
                choixContact: "",
                email: "",
                numeroTelephone: ""
            }
        };
        this.raiseStateChanged();
    }

    onEmailPourVousJoindreChanged(adresseMail: string) {
        this._state = {
            ...this._state,
            pourVousJoindre: {
                ...this._state.pourVousJoindre,
                adresseMail: adresseMail.trim()
            },
            formErrorPourVousJoindre: {
                ...this._state.formErrorPourVousJoindre,
                email: ""
            }
        };
        this.raiseStateChanged();
    }

    onTelephonePourVousJoindreChanged(noTel: string) {
        this._state = {
            ...this._state,
            pourVousJoindre: {
                ...this._state.pourVousJoindre,
                noTel
            },
            formErrorPourVousJoindre: {
                ...this._state.formErrorPourVousJoindre,
                numeroTelephone: ""
            }
        };
        this.raiseStateChanged();
    }

    onAfficherModaleModificationEmail(afficherModalModificationEmail: boolean) {
        this._state = {
            ...this._state,
            afficherModalModificationEmail
        };
        this.raiseStateChanged();
    }

    async onCreationCompte() {
        try {
            this._hasErrorObserver.raiseAdvancementEvent({hasError: false});
            this._hasErrorDejaUnCompteObserver.raiseAdvancementEvent({hasError: false});

            const formError = await this.dependencies.creationCompteService.creationCompte(this._state.creationCompte, this._state.rendezVous);
            this._state = {
                ...this._state,
                formError
            };
        } catch (e) {

            if (e instanceof Error && e.message === CodeMessageApplicatif.IDENTIFIANT_DEJA_EXISTANT) {
                this._hasErrorDejaUnCompteObserver.raiseAdvancementEvent({hasError: true});
            } else {
                this._hasErrorObserver.raiseAdvancementEvent({hasError: true});
            }
        }
        this.raiseStateChanged();
    }

    async onCreationRendezVous() {
        try {
            this._hasErrorObserver.raiseAdvancementEvent({hasError: false});
            const formErrorPourVousJoindre = await this.dependencies.rendezVousService.creerRendezVous(
                this._state.rendezVous, this._state.pourVousJoindre);

            this._state = {
                ...this._state,
                afficherModaleConfirmation: true,
                formErrorPourVousJoindre
            };
        } catch (e) {
            this._hasErrorObserver.raiseAdvancementEvent({hasError: true});
        }
        this.raiseStateChanged();
    }

    //FIXME: faire une classe abstraite qui portera ca, renommer en finalisationController
    async redirectionMireDeConnexion() {
        try {
            this._hasErrorObserver.raiseAdvancementEvent({hasError: false});
            await this.dependencies.authentificationService.authentificationUtilisateur(
                this._stateForm,
                window.location.origin + window.location.pathname
            );
        } catch (e) {
            this._hasErrorObserver.raiseAdvancementEvent({hasError: true});
        }
    }
}
