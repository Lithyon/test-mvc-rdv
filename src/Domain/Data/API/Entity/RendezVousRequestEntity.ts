import {CanalCode} from "../../Enum/Canal";

export default interface RendezVousRequestEntity {
    adresseMail: string;
    canalRendezVous: CanalCode;
    cdBuro: string;
    cdDemande: string;
    cdDomaine: string;
    estFilleul: boolean;
    heure: number;
    jour: Date;
    nmCommu: string;
    noSocietaireParrain: string;
    noTel: string;
    precision: string;
}
