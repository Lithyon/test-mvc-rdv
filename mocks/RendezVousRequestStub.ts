import RendezVousRequestEntity from "../src/Domain/Repository/Data/API/Entity/RendezVousRequestEntity";
import {CanalCode} from "../src/Domain/Repository/Data/Enum/Canal";

const rendezVousRequestStub: RendezVousRequestEntity = {
    adresseMail: "test@test.fr",
    canalRendezVous: CanalCode.AGENCE,
    cdBuro: "7901",
    cdDemande: "01",
    cdDomaine: "01",
    estFilleul: false,
    heure: 1,
    jour: new Date(),
    nmCommu: "NIORT",
    noSocietaireParrain: "",
    noTel: "",
    precision: "test"
};

export default rendezVousRequestStub;