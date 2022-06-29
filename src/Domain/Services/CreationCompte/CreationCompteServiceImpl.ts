import CreationCompteRepositoryImpl from "../../Repository/CreationCompte/CreationCompteRepositoryImpl";
import {FormErrorModelView} from "../../../Presentation/pages/Authentification/ModelView/FormError/FormErrorModelView";
import {BooleanChoiceCode} from "../../Data/Enum/BooleanChoice";
import {CreationCompteModelView} from "../../../Presentation/pages/Authentification/ModelView/CreationCompte/CreationCompteModelView";
import RendezVousSelectionModelView from "../../../Presentation/pages/RendezVous/ModelView/RendezVous/RendezVousSelectionModelView";
import {RendezVousRepositoryImpl} from "../../Repository/RendezVous";
import {buildCreationCompteRequest} from "../../Builders/CreationCompteBuilder";
import {buildCreerRendezVous} from "../../Builders/RendezVousBuilder";

export default class CreationCompteServiceImpl {
    private creationCompteRepo: CreationCompteRepositoryImpl;
    private rendezVousRepo: RendezVousRepositoryImpl;

    constructor(_creationCompteRepo: CreationCompteRepositoryImpl, _rendezVousRepo: RendezVousRepositoryImpl) {
        this.creationCompteRepo = _creationCompteRepo;
        this.rendezVousRepo = _rendezVousRepo;
    }

    validationFormulaire(creationCompte: CreationCompteModelView, rendezVous: RendezVousSelectionModelView) {
        // TODO Voir avec Antoine pour opti
        const formError: FormErrorModelView = {errors: {}};

        if (creationCompte.parrainageChoix && creationCompte.parrainageChoix.code === BooleanChoiceCode.OUI) {
            if (rendezVous.noSocietaireParrain?.length > 0) {
                const testRegex: RegExpMatchArray = rendezVous.noSocietaireParrain.match(/\W/) || [];

                if (testRegex.length > 0) {
                    formError.errors.noSocietaireParrain = "Le numéro de sociétaire ne doit pas contenir de caractères spéciaux";
                }
            }
        }

        if (!creationCompte.civilite.code) {
            formError.errors.civilite = "Veuillez préciser votre civilité";
        }

        if (!creationCompte.informationsCommercialesEmail.code) {
            formError.errors.informationsCommercialesEmail = "Veuillez préciser si vous souhaitez recevoir des informations commerciales des entités du groupe MACIF par e-mail";
        }

        if (!creationCompte.informationsCommercialesSms.code) {
            formError.errors.informationsCommercialesSms = "Veuillez préciser si vous souhaitez recevoir des informations commerciales des entités du groupe MACIF par SMS";
        }

        if (!creationCompte.informationsCommercialesTelephone.code) {
            formError.errors.informationsCommercialesTelephone = "Veuillez préciser si vous souhaitez recevoir des informations commerciales des entités du groupe MACIF par message vocal";
        }

        return formError;
    }

    async creationCompte(creationCompte: CreationCompteModelView, rendezVous: RendezVousSelectionModelView) {
        const formError = this.validationFormulaire(creationCompte, rendezVous);

        if (Object.keys(formError.errors).length === 0) {
            // MODEL transfo en state request
            await this.creationCompteRepo.creationCompte(buildCreationCompteRequest(creationCompte));
            await this.rendezVousRepo.creerRendezVous(buildCreerRendezVous(rendezVous));
        }

        return formError;
    }


}