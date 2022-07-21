import DisponibilitesRequest from "../../Model/Disponibilites/DisponibilitesRequest";
import {RendezVousRepositoryImpl} from "../../Repository/RendezVous";
import {PourVousJoindreModelView} from "../../../Presentation/pages/Authentification/ModelView/PourVousJoindre/PourVousJoindreModelView";
import RendezVousSelectionModelView from "../../../Presentation/pages/RendezVous/ModelView/RendezVous/RendezVousSelectionModelView";
import FormErrorPourVousJoindreModelView
    from "../../../Presentation/pages/Authentification/ModelView/FormError/FormErrorPourVousJoindreModelView";
import FormErrorPourVousJoindreModelViewBuilder
    from "../../../Presentation/pages/Authentification/ModelView/FormError/FormErrorPourVousJoindreModelViewBuilder";
import {AutreChoixCode} from "../../Data/Enum/AutreChoix";
import {CanalCode} from "../../Data/Enum/Canal";
import CanalModelView from "../../../Presentation/pages/RendezVous/ModelView/Canal/CanalModelView";
import RendezVousRequest from "../../Model/RendezVous/RendezVousRequest";

export default class RendezVousServiceImpl {
    private readonly rendezVousRepo: RendezVousRepositoryImpl;

    constructor(_rendezVousRepo: RendezVousRepositoryImpl) {
        this.rendezVousRepo = _rendezVousRepo;
    }

    private static verifierEmail(value: string): boolean {
        const testRegex: RegExpMatchArray = value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/) || [];
        return testRegex.length === 0;
    }

    private static verifierTelephone(value: string): boolean {
        const testRegex: RegExpMatchArray = value.match(/^0\d{9}/) || [];
        return testRegex.length === 0;
    }

    getDisponibilites(disponibilites: DisponibilitesRequest) {
        return this.rendezVousRepo.getDisponibilites(disponibilites);
    }

    formHasError(formError: FormErrorPourVousJoindreModelView): boolean {
        return Object.values(formError).filter((v: string) => v !== "").length !== 0;
    }

    validationFormulairePourVousJoindre(pourVousJoindre: PourVousJoindreModelView,
                                        canalSelected: CanalModelView): FormErrorPourVousJoindreModelView {
        const formError = FormErrorPourVousJoindreModelViewBuilder.buildEmpty();

        if (pourVousJoindre.choixContact.code === "") {
            if (canalSelected.code === CanalCode.VISIO) {
                formError.choixContact = "Veuillez sélectionner ou saisir un e-mail";
            } else {
                formError.choixContact = "Veuillez sélectionner ou saisir un numéro de téléphone";
            }
        } else {
            if (pourVousJoindre.choixContact.code === AutreChoixCode.MAIL) {
                if (pourVousJoindre.adresseMail.length === 0) {
                    formError.email = "Veuillez renseigner votre adresse e-mail";
                } else if (RendezVousServiceImpl.verifierEmail(pourVousJoindre.adresseMail)) {
                    formError.email = "L'adresse e-mail est invalide";
                }
            } else if (pourVousJoindre.choixContact.code === AutreChoixCode.TELEPHONE) {
                if (pourVousJoindre.noTel.length === 0) {
                    formError.numeroTelephone = "Veuillez renseigner votre numéro de téléphone";
                } else if (RendezVousServiceImpl.verifierTelephone(pourVousJoindre.noTel)) {
                    formError.numeroTelephone = "Le numéro de téléphone renseigné est incorrect";
                }
            }
        }

        return formError;
    }

    async creerRendezVous(rendezVous: RendezVousSelectionModelView,
                          pourVousJoindre: PourVousJoindreModelView): Promise<FormErrorPourVousJoindreModelView> {
        const formError = this.validationFormulairePourVousJoindre(pourVousJoindre, rendezVous.canalSelected);

        if (!this.formHasError(formError)) {
            let adresseMail = pourVousJoindre.listeChoixContacts.listeEmails[0].code;
            let noTel = pourVousJoindre.listeChoixContacts.listeNumerosTelephones[0].code;

            if (rendezVous.canalSelected.code === CanalCode.VISIO) {
                adresseMail = pourVousJoindre.choixContact.code !== AutreChoixCode.MAIL
                    ? pourVousJoindre.choixContact.code
                    : pourVousJoindre.adresseMail;
            } else {
                noTel = pourVousJoindre.choixContact.code !== AutreChoixCode.TELEPHONE
                    ? pourVousJoindre.choixContact.code
                    : pourVousJoindre.noTel;
            }

            await this.rendezVousRepo.creerRendezVous(new RendezVousRequest({
                noTel,
                adresseMail,
                canalRendezVous: rendezVous.canalSelected.code,
                cdBuro: rendezVous.cdBuro,
                cdDemande: rendezVous.demandeSelected.code,
                cdDomaine: rendezVous.domaineSelected.code,
                estFilleul: rendezVous.estFilleul,
                heure: rendezVous.heure.code,
                jour: rendezVous.jour,
                nmCommu: rendezVous.nmCommu,
                noSocietaireParrain: rendezVous.noSocietaireParrain,
                precision: rendezVous.precision
            }));
        }

        return formError;
    }
}
