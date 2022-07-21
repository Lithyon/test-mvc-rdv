import CommuneState from "../Commune/CommuneState";

export default interface CreationCompteRequestState {
    cdCivil: string;
    nmPers: string;
    znPrenPers: string;
    informationMacifMail: boolean;
    informationMacifSms: boolean;
    informationMacifMessageVocal: boolean;
    dtNaisPers: string;
    noTeleLigne: string;
    cdProfPers: string;
    cdSituatFamil: string;
    znAdrEmail: string;
    commune: CommuneState;
}
