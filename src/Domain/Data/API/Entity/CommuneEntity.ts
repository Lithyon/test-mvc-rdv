interface RegionEntity {
    codeRegion: string;
    noStruct: string;
    nom: string;
}

interface DepartementEntity {
    codeDepartement: string;
    nom: string;
    region: RegionEntity;
}

export default interface CommuneEntity {
    id?: string;
    codeInsee: string;
    codePostal: string;
    ancienNom: string;
    departement: DepartementEntity;
    lieuDit: boolean;
    nom: string;
    nomAcheminement: string;
    pays: string;
}
