import DomaineModelView from "../Domaine/DomaineModelView";
import DemandeModelView from "../Demande/DemandeModelView";
import CanalModelView from "../Canal/CanalModelView";
import HeureDisponibleModelView from "../Disponibilites/HeureDisponibleModelView";
import ChoixConnexionModelView from "../ChoixConnexion/ChoixConnexionModelView";

export default interface RendezVousSelectionModelView {
    readonly proposerChoixHoraire: boolean;
    readonly afficherChoixCanaux: boolean;
    readonly afficherChoixConnexion: boolean;
    readonly choixConnexionSelected: ChoixConnexionModelView;
    readonly adresseMail: string;
    readonly canalSelected: CanalModelView;
    readonly domaineSelected: DomaineModelView;
    readonly demandeSelected: DemandeModelView;
    readonly cdBuro: string;
    readonly nmCommu: string;
    readonly noSocietaireParrain: string;
    readonly noTel: string;
    readonly precision: string;
    readonly estFilleul: boolean;
    readonly heure: HeureDisponibleModelView;
    readonly jour: Date;
}
