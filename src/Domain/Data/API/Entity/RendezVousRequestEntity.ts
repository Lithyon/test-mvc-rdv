import {CanalCode} from "../../Enum/Canal";

export default interface RendezVousRequestEntity {
    readonly adresseMail: string;
    readonly canalRendezVous: CanalCode | string;
    readonly cdBuro: string;
    readonly cdDemande: string;
    readonly cdDomaine: string;
    readonly estFilleul: boolean;
    readonly heure: number;
    readonly jour: string;
    readonly nmCommu: string;
    readonly noSocietaireParrain: string;
    readonly noTel: string;
    readonly precision: string;
}
