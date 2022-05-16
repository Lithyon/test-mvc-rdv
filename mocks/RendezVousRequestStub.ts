import RendezVousRequestEntity from "../src/Domain/Repository/Data/API/Entity/RendezVousRequestEntity";

const rendezVousRequestStub: RendezVousRequestEntity = {
    cdBuro: "7901",
    cdDemande: "01",
    cdDomaine: "01",
    estFilleul: false,
    heure: 1,
    jour: new Date(),
    nmCommu: "NIORT",
    noSocietaireParrain: "",
    noTel: "",
    precision: ""
};

export default rendezVousRequestStub;