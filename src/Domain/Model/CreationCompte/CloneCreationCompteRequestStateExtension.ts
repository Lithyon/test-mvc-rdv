import Prototype from "../Commun/Prototype";
import CreationCompteRequestState from "./CreationCompteRequestState";

function CloneCreationCompteRequestState(): CreationCompteRequestState {
    const that = this as CreationCompteRequestState;
    return {
        cdCivil: that.cdCivil,
        nmPers: that.nmPers,
        znPrenPers: that.znPrenPers,
        informationMacifMail: that.informationMacifMail,
        informationMacifMessageVocal: that.informationMacifMessageVocal,
        informationMacifSms: that.informationMacifSms,
        dtNaisPers: that.dtNaisPers,
        noTeleLigne: that.noTeleLigne,
        cdProfPers: that.cdProfPers,
        cdSituatFamil: that.cdSituatFamil,
        znAdrEmail: that.znAdrEmail,
        commune: that.commune
    };
}

export function CloneCreationCompteRequestStateExtension(state: CreationCompteRequestState): Prototype<CreationCompteRequestState> {
    const prototype = state as any;

    prototype.clone = CloneCreationCompteRequestState.bind(prototype);

    return prototype;
}
