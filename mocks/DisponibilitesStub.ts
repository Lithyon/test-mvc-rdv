import DisponibilitesEntity from "../src/Domain/Repository/Data/API/Entity/DisponibilitesEntity";

const disponibilitesStub: DisponibilitesEntity = {
    disponibilites: [
        {
            disponibilitesApresMidi: [
                {
                    valeur: 840,
                    libelle: "14h"
                },
                {
                    valeur: 855,
                    libelle: "14h15"
                }
            ],
            disponibilitesMatin: [],
            ferie: false,
            jour: new Date("2022-05-16")
        }
    ],
    aucuneDisponibilite: true
};

export default disponibilitesStub;