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

interface CommuneEntity {
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

export default interface CommunesEntity {
    communes: Array<CommuneEntity>;
}
