import EligibiliteEntity from "../src/Domain/Data/API/Entity/EligibiliteEntity";

const eligibilitesStub: EligibiliteEntity = {
    eligibleRdvPhysique: true,
    eligibleRdvTelephonique: true,
    eligibleRdvVisio: true
};

const eligibilitesSansVisioStub: EligibiliteEntity = {
    eligibleRdvPhysique: true,
    eligibleRdvTelephonique: true,
    eligibleRdvVisio: false
};

export {eligibilitesStub, eligibilitesSansVisioStub}