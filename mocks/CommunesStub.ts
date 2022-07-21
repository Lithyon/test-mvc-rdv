import CommunesEntity from "../src/Domain/Data/API/Entity/CommunesEntity";

const communesStub: CommunesEntity = {
    communes: [
        {
            codeInsee: "",
            codePostal: "",
            ancienNom: "",
            departement: {
                codeDepartement: "",
                nom: "",
                region: {
                    codeRegion: "",
                    noStruct: "",
                    nom: ""
                }
            },
            id: "",
            lieuDit: false,
            nom: "",
            nomAcheminement: "",
            pays: "",
        }
    ]
};

export default communesStub;