import { useState } from "react";
import PointAccueilAPIDataSourceImpl from "../../../Data/DataSource/API/PointAccueilAPIDataSourceImpl";
import { PointAccueilRepositoryImpl } from "../../../Data/Repository/PointAccueilRepositoryImpl";
import { PointAccueil } from "../../../Domain/Model/PointAccueil";
import { GetPointAccueilUseCase } from "../../../Domain/UseCase/GetPointAccueil";

export default function BandeauPointAccueilViewModel() {
  const [pointAccueil, setPointAccueil] = useState<PointAccueil>({
    cdBuro: "",
    nomPointAccueil: "",
    telPointAccueil: "",
    adressePointAccueil: {
      noVoie: "",
      typeVoie: "",
      nomVoie: "",
      codePostal: "",
      commune: "",
    },
    srcImgPointAccueil: "",
    urlPointAccueil: "",
    horairesOuvertureFermetures: [],
  });

  const UseCase = new GetPointAccueilUseCase(
    new PointAccueilRepositoryImpl(new PointAccueilAPIDataSourceImpl())
  );

  async function getPointAccueil(cdBuro: string) {
    setPointAccueil(await UseCase.invoke(cdBuro));
  }

  return {
    getPointAccueil,
    pointAccueil,
  };
}
