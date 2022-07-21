import ProfessionEntity from "../src/Domain/Data/API/Entity/ProfessionEntity";

const ProfessionStub: ProfessionEntity = {
    codes: [{
        libelle: "Agent de maîtrise",
        code: "05"
    }, {
        libelle: "Agent de maîtrise de la fonction publique",
        code: "X5"
    }],
    nomCodification: "CD_PROF_PERS"
};

export default ProfessionStub;
