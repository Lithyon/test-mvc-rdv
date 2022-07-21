import CommuneEntity from "./CommuneEntity";

export default interface CreationCompteRequestEntity {
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
    commune: CommuneEntity;
}
