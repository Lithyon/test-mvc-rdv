import { HorairesOuvertureFermeture } from "../../../../../Domain/Model/PointAccueil/PointAccueil";

export default interface BandeauPointAccueilModelView {
  readonly cdBuro: string;
  readonly nomPointAccueil: string;
  readonly telPointAccueil: string;
  readonly noVoie: string;
  readonly typeVoie: string;
  readonly nomVoie: string;
  readonly codePostal: string;
  readonly commune: string;
  readonly srcImgPointAccueil: string;
  readonly urlPointAccueil: string;
  readonly horairesOuvertureFermetures: Array<HorairesOuvertureFermeture>;
}
