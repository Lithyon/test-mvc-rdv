import RendezVousSelectionModelView from "./RendezVousSelectionModelView";
import BandeauPointAccueilModelView from "../BandeauPointAccueil/ModelView/BandeauPointAccueilModelView";
import CodificationModelView from "../../../commons/Codification/CodificationModelView";
import {RendezVousDisponibilitesModelView} from "./RendezVousDisponibilitesModelView";

export default interface RendezVousModelView {
    readonly domaines: Array<CodificationModelView>;
    readonly demandes: Array<CodificationModelView>;
    readonly canal: Array<CodificationModelView>;
    readonly disponibilites: RendezVousDisponibilitesModelView;
    readonly rendezVous: RendezVousSelectionModelView;
    readonly pointAccueil: BandeauPointAccueilModelView;
}
