import RendezVousSelectionModelView from "./RendezVousSelectionModelView";
import BandeauPointAccueilModelView from "../BandeauPointAccueil/ModelView/BandeauPointAccueilModelView";
import {DisponibilitesModelView} from "./Disponibilites/DisponibilitesModelView";
import DomaineModelView from "./DomaineModelView";
import DemandeModelView from "./DemandeModelView";
import CanalModelView from "./CanalModelView";

export default interface RendezVousModelView {
    readonly domaines: Array<DomaineModelView>;
    readonly demandes: Array<DemandeModelView>;
    readonly canal: Array<CanalModelView>;
    readonly disponibilites: DisponibilitesModelView;
    readonly rendezVous: RendezVousSelectionModelView;
    readonly pointAccueil: BandeauPointAccueilModelView;
}
