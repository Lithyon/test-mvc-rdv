import Prototype from "../Commun/Prototype";
import CreationCompteRequestState from "./CreationCompteRequestState";


function CloneCreationCompteRequestState(): CreationCompteRequestState {
    return {
        cdCivil: this.cdCivil,
        informationMacifMail: this.informationMacifMail,
        informationMacifMessageVocal: this.informationMacifMessageVocal,
        informationMacifSms: this.informationMacifSms
    };
}

export function CloneCreationCompteRequestStateExtension(state: CreationCompteRequestState): Prototype<CreationCompteRequestState> {
    const prototype = state as any;

    prototype.clone = CloneCreationCompteRequestState.bind(prototype);

    return prototype;
}