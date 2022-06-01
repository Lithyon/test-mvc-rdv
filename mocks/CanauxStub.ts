import {CanalCode} from "../src/Domain/Data/Enum/Canal";
import CanalModelView from "../src/Presentation/pages/RendezVous/ModelView/Canal/CanalModelView";

const canauxStub: Array<CanalModelView> = [{
    libelle: "En agence",
    code: CanalCode.AGENCE
}, {
    libelle: "Par téléphone",
    code: CanalCode.TELEPHONE
}, {
    libelle: "En visioconférence",
    code: CanalCode.VISIO,
    isNew: true,
}];

const canauxSansVisioStub: Array<CanalModelView> = [{
    libelle: "En agence",
    code: CanalCode.AGENCE
}, {
    libelle: "Par téléphone",
    code: CanalCode.TELEPHONE
}]

export {canauxStub, canauxSansVisioStub};