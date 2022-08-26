import HeureDisponibleEntity from "./HeureDisponibleEntity";

export default interface JourDisponibleEntity {
    readonly disponibilitesApresMidi: HeureDisponibleEntity[];
    readonly disponibilitesMatin: HeureDisponibleEntity[];
    readonly ferie: boolean;
    readonly jour: Date;
}
