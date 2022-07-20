import HeureDisponibleModelView from "./HeureDisponibleModelView";

export default interface JourDisponibleModelView {
    disponibilitesApresMidi: Array<HeureDisponibleModelView>;
    disponibilitesMatin: Array<HeureDisponibleModelView>;
    ferie: boolean;
    jour: Date;
}
