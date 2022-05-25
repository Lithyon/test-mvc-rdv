import {CanalCode} from "../../../../../Domain/Data/Enum/Canal";
import {ChoixConnexionCode} from "../../../../../Domain/Data/Enum/ChoixConnexion";

export default interface RendezVousSelectionModelView {
    readonly proposerChoixHoraire: boolean;
    readonly afficherChoixCanaux: boolean;
    readonly afficherChoixConnexion: boolean;
    readonly choixConnexionSelected: ChoixConnexionCode | string;
    readonly adresseMail: string;
    readonly canalSelected: CanalCode | string;
    readonly domaineSelected: string;
    readonly demandeSelected: string;
    readonly cdBuro: string;
    readonly nmCommu: string;
    readonly noSocietaireParrain: string;
    readonly noTel: string;
    readonly precision: string;
    readonly estFilleul: boolean;
    readonly heure: number;
    readonly jour: Date;
}
