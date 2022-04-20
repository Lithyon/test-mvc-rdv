import { DemandeEtat } from "../../../../../../Domain/Model/Demande";
import DemandeModelView from "./DemandeModelView";

export default class DemandeModelViewBuilder {
  static buildFromDemande(demande: DemandeEtat): DemandeModelView {
    return {
      code: demande.code,
      libelle: demande.libelle,
    };
  }

  static buildEmpty(): DemandeModelView {
    return {
      code: "",
      libelle: "",
    };
  }
}
