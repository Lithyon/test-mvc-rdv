// @ts-ignore
import { Config, SessionStorageService } from "maciffr-services-js";

export default function getAgenceUseCase(cdBuro: string): Promise<any> {
  return Config.getInstanceAxiosForSsm()
    .get(
      `/internet-espaceclient-rest/unprotected/espace-client/pointaccueil/_lire_point_accueil?cdBuro=${cdBuro}`
    )
    .then((response: any) => {
      const data = response.data.data;

      const agence = {
        cdBuro: data.cdBuro,
        nomAgence: data.liBuro,
        telAgence: data.noTeleLigne,
        adresseAgence: {
          noVoie: data.noVoie,
          typeVoie: data.liNatuVoie,
          nomVoie: data.nmVoie,
          codePostal: data.cdPost,
          commune: data.nmCommu,
        },
        srcImgAgence: `https://www.macif.fr/files/live/sites/maciffr/files/maciffr/NousContacter/pa_${data.cdBuro}.jpg`,
        urlAgence: `https://agence.macif.fr/assurance/proxy.asp?agenceid=${data.cdBuro}`,
        horairesOuvertureFermetures: data.horairesOuvertureFermetures,
      };

      SessionStorageService.setItemJSON(
        "horaireAgence",
        data.horairesOuvertureFermetures
      );

      return agence;
    })
    .catch((error: any) => {
      throw error;
    });
}
