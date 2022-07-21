interface RegionState {
    codeRegion: string;
    noStruct: string;
    nom: string;
}

interface DepartementState {
    codeDepartement: string;
    nom: string;
    region: RegionState;
}

export default interface CommuneState {
    id?: string;
    codeInsee: string;
    codePostal: string;
    ancienNom: string;
    departement: DepartementState;
    lieuDit: boolean;
    nom: string;
    nomAcheminement: string;
    pays: string;
}
