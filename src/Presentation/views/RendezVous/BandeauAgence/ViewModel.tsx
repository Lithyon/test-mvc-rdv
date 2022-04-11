import { useState } from "react";
import getAgenceUseCase from "../../../../Domain/UseCase/Agence/GetAgence";

export default function BandeauAgenceViewModel() {
  const [error, setError] = useState("");
  const [agence, setAgence] = useState({
    cdBuro: "",
    nomAgence: "",
    telAgence: "",
    adresseAgence: {
      noVoie: "",
      typeVoie: "",
      nomVoie: "",
      codePostal: "",
      commune: "",
    },
    srcImgAgence: "",
    urlAgence: "",
    horairesOuvertureFermetures: "",
  });

  async function getAgence(cdBuro: string) {
    const result = await getAgenceUseCase(cdBuro);
    setError(error);
    setAgence(result);
  }

  return {
    agence,
    getAgence,
  };
}
