import Prototype from "../Commun/Prototype";
import ContactState from "./ContactState";
import {CloneContactStateExtension} from "./CloneContactStateExtension";

interface InternalContactState extends ContactState, Prototype<ContactState> {
}

export default class Contact {
    private readonly _state: InternalContactState;

    constructor(state: ContactState) {
        this._state = CloneContactStateExtension(state) as InternalContactState;
    }

    get state() {
        return this._state.clone();
    }
}