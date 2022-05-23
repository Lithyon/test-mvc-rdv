import HeureDisponibleEntity from "./HeureDisponibleEntity";

export default interface JourDisponibleEntity {
    disponibilitesApresMidi: HeureDisponibleEntity[];
    disponibilitesMatin: HeureDisponibleEntity[];
    ferie: boolean;
    jour: Date;
}