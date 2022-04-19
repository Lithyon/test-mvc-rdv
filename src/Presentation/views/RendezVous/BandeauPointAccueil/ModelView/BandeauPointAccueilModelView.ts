import { PointAccueilEtat } from "../../../../../Domain/Model/PointAccueil";

export default class BandeauPointAccueilModelView {
  private _urlImg?: string;
  private _urlPointAccueil?: string;

  constructor(readonly pointAccueil?: PointAccueilEtat) {
    if (this.pointAccueil) {
      this._urlImg = `https://www.macif.fr/files/live/sites/maciffr/files/maciffr/NousContacter/pa_${this.pointAccueil?.cdBuro}.jpg`;
      this._urlPointAccueil = `https://www.macif.fr/files/live/sites/maciffr/files/maciffr/NousContacter/pa_${this.pointAccueil?.cdBuro}.jpg`;
    }
  }

  get cdBuro() {
    return this.pointAccueil?.cdBuro || "";
  }

  get nomPointAccueil() {
    return this.pointAccueil?.liBuro || "";
  }

  get telPointAccueil() {
    return this.pointAccueil?.noTeleLigne || "";
  }

  get noVoie() {
    return this.pointAccueil?.noVoie || "";
  }

  get typeVoie() {
    return this.pointAccueil?.liNatuVoie || "";
  }

  get nomVoie() {
    return this.pointAccueil?.nmVoie || "";
  }

  get codePostal() {
    return this.pointAccueil?.cdPost || "";
  }

  get commune() {
    return this.pointAccueil?.nmCommu || "";
  }

  get srcImgPointAccueil() {
    return this._urlImg || "";
  }

  get urlPointAccueil() {
    return this._urlPointAccueil || "";
  }

  get horairesOuvertureFermetures() {
    return this.pointAccueil?.horairesOuvertureFermetures || [];
  }
}
