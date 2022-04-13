import { PointAccueil } from "../../Data/DataSource/API/Entity/PointAccueilAPIEntity";

export interface AdressePointAccueil {
  noVoie: string;
  typeVoie: string;
  nomVoie: string;
  codePostal: string;
  commune: string;
}

export interface HorairesOuvertureFermeture {
  cdJj: string;
  hrFermMatin: string;
  hrFermSoir: string;
  hrOuvMatin: string;
  hrOuvSoir: string;
  liJj: string;
}

export default class PointAccueilViewModel {
  readonly _urlImg?: string;
  readonly _urlPointAccueil?: string;

  constructor(readonly pointAccueil?: PointAccueil) {
    if (this.pointAccueil?.cdBuro) {
      this._urlImg = `https://www.macif.fr/files/live/sites/maciffr/files/maciffr/NousContacter/pa_${this.pointAccueil?.cdBuro}.jpg`;
      this._urlPointAccueil = `https://www.macif.fr/files/live/sites/maciffr/files/maciffr/NousContacter/pa_${this.pointAccueil?.cdBuro}.jpg`;
    }
  }

  get cdBuro(): string {
    return this.pointAccueil?.cdBuro || "";
  }

  get nomPointAccueil(): string {
    return this.pointAccueil?.liBuro || "";
  }

  get telPointAccueil(): string {
    return this.pointAccueil?.noTeleLigne || "";
  }

  get adressePointAccueil(): AdressePointAccueil {
    return {
      noVoie: this.pointAccueil?.noVoie || "",
      typeVoie: this.pointAccueil?.liNatuVoie || "",
      nomVoie: this.pointAccueil?.nmVoie || "",
      codePostal: this.pointAccueil?.cdPost || "",
      commune: this.pointAccueil?.nmCommu || "",
    };
  }

  get srcImgPointAccueil(): string {
    return this._urlImg || "";
  }

  get urlPointAccueil(): string {
    return this._urlPointAccueil || "";
  }

  get horairesOuvertureFermetures(): Array<HorairesOuvertureFermeture> {
    return this.pointAccueil?.horairesOuvertureFermetures || [];
  }
}
