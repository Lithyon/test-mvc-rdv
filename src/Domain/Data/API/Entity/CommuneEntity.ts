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
    codeInsee: string;
    codePostal: string;
    ancienNom: string;
    departement: DepartementEntity;
    id: string;
    lieuDit: boolean;
    nom: string;
    nomAcheminement: string;
    pays: string;
}
