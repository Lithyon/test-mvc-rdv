import { useState } from "react";
import PointAccueilAPIDataSourceImpl from "../../../Data/DataSource/API/PointAccueilAPIDataSourceImpl";
import { PointAccueilRepositoryImpl } from "../../../Data/Repository/PointAccueilRepositoryImpl";
import { PointAccueil } from "../../../Domain/Model/PointAccueil";
import { PointAccueilRepository } from "../../../Domain/Repository/PointAccueilRepository";
import { GetPointAccueilUseCase } from "../../../Domain/UseCase/GetPointAccueil";

export default function RendezVousViewModel() {
  const pointAccueilRepository: PointAccueilRepository =
    new PointAccueilRepositoryImpl(new PointAccueilAPIDataSourceImpl());
  const [pointAccueil, setPointAccueil] = useState<PointAccueil>(
    pointAccueilRepository.getDefaultPointAccueil()
  );

  const UseCase = new GetPointAccueilUseCase(pointAccueilRepository);

  async function getPointAccueil(cdBuro: string) {
    setPointAccueil(await UseCase.invoke(cdBuro));
  }

  return {
    getPointAccueil,
    pointAccueil,
  };
}
