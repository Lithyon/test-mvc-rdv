import {CanalCode} from "../../Enum/Canal";

export default interface DisponibilitesRequestEntity {
    canalRendezVous: CanalCode | string;
    cdBuro: string;
    cdDemande: string;
    cdDomaine: string;
    dtDebut: Date;
}