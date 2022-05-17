import {CanalCode} from "../../Repository/Data/Enum/Canal";

export default interface DisponibilitesRequestState {
    canalRendezVous: CanalCode | string;
    cdBuro: string;
    cdDemande: string;
    cdDomaine: string;
    dtDebut: Date;
}