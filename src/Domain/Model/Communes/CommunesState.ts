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

interface CommuneState {
    codeInsee: string;
    codePostal: string;
    ancienNom: string;
    departement: DepartementState;
    id: string;
    lieuDit: boolean;
    nom: string;
    nomAcheminement: string;
    pays: string;
}

export default interface CommunesState {
    communes: Array<CommuneState>;
}
