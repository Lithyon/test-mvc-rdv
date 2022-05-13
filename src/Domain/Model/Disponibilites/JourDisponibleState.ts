import HeureDisponibleState from "./HeureDisponibleState";

export default interface JourDisponibleState {
    disponibilitesApresMidi: Array<HeureDisponibleState>;
    disponibilitesMatin: Array<HeureDisponibleState>;
    ferie: boolean;
    jour: Date;
}