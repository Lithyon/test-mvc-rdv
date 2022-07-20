import {ChoixConnexionCode} from "../../../../../Domain/Data/Enum/ChoixConnexion";

export default interface ChoixConnexionModelView {
    libelle: string,
    code: ChoixConnexionCode | string,
}
