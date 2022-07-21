import ContactState from "./ContactState";
import Prototype from "../Commun/Prototype";

function cloneContactState(): ContactState {
    const that = this as ContactState;
    return {
        adresses: that.adresses,
        preferencesContact: that.preferencesContact,
        email: that.email,
        preferencesDematerialisation: that.preferencesDematerialisation,
        telephones: that.telephones,
        telephoneTemporaire: that.telephoneTemporaire
    };
}

export function CloneContactStateExtension(state: ContactState): Prototype<ContactState> {
    const prototype = state as any;

    prototype.clone = cloneContactState.bind(prototype);

    return prototype;
}