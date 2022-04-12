export interface PointAccueil {
  cdBuro: string;
  nomPointAccueil: string;
  telPointAccueil: string;
  adressePointAccueil: {
    noVoie: string;
    typeVoie: string;
    nomVoie: string;
    codePostal: string;
    commune: string;
  };
  srcImgPointAccueil: string;
  urlPointAccueil: string;
  horairesOuvertureFermetures: HorairesOuvertureFermeture[];
}

export interface HorairesOuvertureFermeture {
  cdJj: string;
  hrFermMatin: string;
  hrFermSoir: string;
  hrOuvMatin: string;
  hrOuvSoir: string;
  liJj: string;
}

const DefaultPointAccueil: PointAccueil = {
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
};

export default DefaultPointAccueil;