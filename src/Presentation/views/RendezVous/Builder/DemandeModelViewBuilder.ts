import Demande from "../../../../Domain/Model/Demande/Demande";
import DemandeModelView from "../ModelView/DemandeModelView";

export default class DemandeModelViewBuilder {
    static buildFromDemande(demande: Demande): DemandeModelView {
        return {
            code: demande.state.code,
            libelle: demande.state.libelle,
        };
    }

    static buildEmpty(): DemandeModelView {
        return {
            code: "",
            libelle: "",
        };
    }
}