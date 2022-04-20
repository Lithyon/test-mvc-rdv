import { DomaineEtat } from "../../../../../../Domain/Model/Domaine";
import DomaineModelView from "./DomaineModelView";

export default class DomaineModelViewBuilder {
  static buildFromDomaine(domaine: DomaineEtat): DomaineModelView {
    return {
      code: domaine.code,
      libelle: domaine.libelle,
    };
  }

  static buildEmpty(): DomaineModelView {
    return {
      code: "",
      libelle: "",
    };
  }
}
