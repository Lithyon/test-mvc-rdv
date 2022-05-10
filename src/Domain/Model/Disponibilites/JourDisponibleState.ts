import HeureDisponibleState from "./HeureDisponibleState";
import Cloneable from "../Commun/Clonable";

export default class JourDisponibleState implements Cloneable<JourDisponibleState> {
    disponibilitesApresMidi: Array<HeureDisponibleState>;
    disponibilitesMatin: Array<HeureDisponibleState>;
    ferie: boolean;
    jour: Date;

    constructor(disponibilitesApresMidi: Array<HeureDisponibleState>, disponibilitesMatin: Array<HeureDisponibleState>, ferie: boolean, jour: Date) {
        this.disponibilitesApresMidi = disponibilitesApresMidi;
        this.disponibilitesMatin = disponibilitesMatin;
        this.ferie = ferie;
        this.jour = jour;
    }

    clone(): JourDisponibleState {
        return new JourDisponibleState(
            this.disponibilitesApresMidi,
            this.disponibilitesMatin,
            this.ferie,
            this.jour
        );
    }
}