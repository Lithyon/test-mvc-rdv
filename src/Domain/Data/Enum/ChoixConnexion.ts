export enum ChoixConnexionCode {
    HAS_ACCOUNT = "HAS_ACCOUNT",
    NO_ACCOUNT = "NO_ACCOUNT"
}

export interface ChoixConnexion {
    readonly libelle: string,
    readonly code: ChoixConnexionCode,
}

const DefaultChoixConnexion: Array<ChoixConnexion> = [{
    libelle: "Oui, j'ai un espace et je me connecte",
    code: ChoixConnexionCode.HAS_ACCOUNT
}, {
    libelle: "Non je n'ai pas d'espace, je poursuis le formulaire",
    code: ChoixConnexionCode.NO_ACCOUNT
}]

export default DefaultChoixConnexion;