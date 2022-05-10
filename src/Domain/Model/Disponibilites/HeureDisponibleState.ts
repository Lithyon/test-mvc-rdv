import Cloneable from "../Commun/Clonable";

export default class HeureDisponibleState implements Cloneable<HeureDisponibleState> {
    libelle: string;
    valeur: number;

    constructor(libelle: string, valeur: number) {
        this.libelle = libelle;
        this.valeur = valeur;
    }

    clone(): HeureDisponibleState {
        return new HeureDisponibleState(
            this.libelle,
            this.valeur
        );
    }
}