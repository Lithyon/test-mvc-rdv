import DefaultPointAccueil, { PointAccueil } from "../../Domain/Model/PointAccueil";
import { PointAccueilRepository } from "../../Domain/Repository/PointAccueilRepository";
import { PointAccueilAPIEntity } from "../DataSource/API/Entity/PointAccueilAPIEntity";
import PointAccueilDataSource from "../DataSource/PointAccueilDataSource";

export class PointAccueilRepositoryImpl implements PointAccueilRepository {
  private _dataSource: PointAccueilDataSource;

  constructor(datasource: PointAccueilDataSource) {
    this._dataSource = datasource;
  }

  getDefaultPointAccueil(): PointAccueil {
    return DefaultPointAccueil;
  }

  async getPointAccueil(cdBuro: string): Promise<PointAccueil> {
    return this._convertDataSourceToPointAccueil(
      await this._dataSource.getPointAccueil(cdBuro)
    );
  }

  private _convertDataSourceToPointAccueil({
    data,
  }: PointAccueilAPIEntity): PointAccueil {
    return {
      cdBuro: data.cdBuro,
      nomPointAccueil: data.liBuro,
      telPointAccueil: data.noTeleLigne,
      adressePointAccueil: {
        noVoie: data.noVoie,
        typeVoie: data.liNatuVoie,
        nomVoie: data.nmVoie,
        codePostal: data.cdPost,
        commune: data.nmCommu,
      },
      srcImgPointAccueil: `https://www.macif.fr/files/live/sites/maciffr/files/maciffr/NousContacter/pa_${data.cdBuro}.jpg`,
      urlPointAccueil: `https://agence.macif.fr/assurance/proxy.asp?agenceid=${data.cdBuro}`,
      horairesOuvertureFermetures: data.horairesOuvertureFermetures,
    };
  }
}
