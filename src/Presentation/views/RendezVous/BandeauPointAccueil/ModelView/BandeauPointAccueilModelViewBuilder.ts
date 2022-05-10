import { IPointAccueil } from "../../../../../Domain/Model/PointAccueil/PointAccueil";
import BandeauPointAccueilModelView from "./BandeauPointAccueilModelView";

export default class BandeauPointAccueilModelViewBuilder {
  static buildFromPointAccueil(
    pointAccueil: IPointAccueil
  ): BandeauPointAccueilModelView {
    return {
      cdBuro: pointAccueil.cdBuro,
      nomPointAccueil: pointAccueil.liBuro,
      telPointAccueil: pointAccueil.noTeleLigne,
      noVoie: pointAccueil.noVoie,
      typeVoie: pointAccueil.liNatuVoie,
      nomVoie: pointAccueil.nmVoie,
      codePostal: pointAccueil.cdPost,
      commune: pointAccueil.nmCommu,
      srcImgPointAccueil: `https://www.macif.fr/files/live/sites/maciffr/files/maciffr/NousContacter/pa_${pointAccueil.cdBuro}.jpg`,
      urlPointAccueil: `https://agence.macif.fr/assurance/proxy.asp?agenceid=${pointAccueil.cdBuro}`,
      horairesOuvertureFermetures: pointAccueil.horairesOuvertureFermetures,
    };
  }

  static buildEmpty(): BandeauPointAccueilModelView {
    return {
      cdBuro: "",
      nomPointAccueil: "",
      telPointAccueil: "",
      noVoie: "",
      typeVoie: "",
      nomVoie: "",
      codePostal: "",
      commune: "",
      srcImgPointAccueil: "",
      urlPointAccueil: "",
      horairesOuvertureFermetures: [],
    };
  }
}
