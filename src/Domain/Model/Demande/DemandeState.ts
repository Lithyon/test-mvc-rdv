import Cloneable from "../Commun/Clonable";

export default class DemandeState implements Cloneable<DemandeState> {
    code: string;
    libelle: string;

    constructor(code: string, libelle: string) {
        this.code = code;
        this.libelle = libelle;
    }

    clone(): DemandeState {
        return new DemandeState(
            this.code,
            this.libelle
        );
    }
}