import Cloneable from "../Commun/Clonable";

export default class DomaineState implements Cloneable<DomaineState> {
    code: string;
    libelle: string;

    constructor(code: string, libelle: string) {
        this.code = code;
        this.libelle = libelle;
    }

    clone(): DomaineState {
        return new DomaineState(
            this.code,
            this.libelle
        );
    }
}