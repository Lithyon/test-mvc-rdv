import SituationFamilialeEntity from "../src/Domain/Data/API/Entity/SituationFamilialeEntity";

const SituationFamilialeStub: SituationFamilialeEntity = {
    codes: [{
        libelle: "Célibataire",
        code: "C"
    }, {
        libelle: "Marié(e)",
        code: "M"
    }],
    nomCodification: "CD_SITUAT_FAMIL"
};

export default SituationFamilialeStub;
