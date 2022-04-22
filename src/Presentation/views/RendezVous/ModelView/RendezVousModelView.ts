import RendezVousSelectionModelView from "./RendezVousSelectionModelView";
import BandeauPointAccueilModelView from "../BandeauPointAccueil/ModelView/BandeauPointAccueilModelView";
import CodificationModelView from "../../../commons/Codification/CodificationModelView";

export default interface RendezVousModelView {
    readonly domaines: Array<CodificationModelView>;
    readonly demandes: Array<CodificationModelView>;
    readonly rendezVous: RendezVousSelectionModelView;
    readonly pointAccueil: BandeauPointAccueilModelView;
}
