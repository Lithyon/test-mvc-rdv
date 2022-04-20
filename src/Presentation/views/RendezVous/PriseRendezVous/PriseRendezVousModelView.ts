import DemandeModelView from "./Demande/ModelView/DemandeModelView";
import DomaineModelView from "./Domaine/ModelView/DomaineModelView";

export default interface PriseRendezVousModelView {
  readonly domaine: Array<DomaineModelView>;
  readonly domaineSelected: string;
  readonly demande: Array<DemandeModelView>;
  readonly demandeSelected: string;
}
