import DemandeModelView from "../PriseRendezVous/Demande/ModelView/DemandeModelView";
import DomaineModelView from "../PriseRendezVous/Domaine/ModelView/DomaineModelView";
import RendezVousSelectionModelView from "./RendezVousSelectionModelView";
import BandeauPointAccueilModelView from "../BandeauPointAccueil/ModelView/BandeauPointAccueilModelView";

export default interface RendezVousModelView {
    readonly domaine: Array<DomaineModelView>;
    readonly demande: Array<DemandeModelView>;
    readonly rendezVous: RendezVousSelectionModelView;
    readonly pointAccueil: BandeauPointAccueilModelView;
}
