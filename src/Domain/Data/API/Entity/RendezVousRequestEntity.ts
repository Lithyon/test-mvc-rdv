import {CanalCode} from "../../Enum/Canal";

export default interface RendezVousRequestEntity {
    adresseMail: string;
    canalRendezVous: CanalCode | string;
    cdBuro: string;
    cdDemande: string;
    cdDomaine: string;
    estFilleul: boolean;
    heure: number;
    jour: string;
    nmCommu: string;
    noSocietaireParrain: string;
    noTel: string;
    precision: string;
}
