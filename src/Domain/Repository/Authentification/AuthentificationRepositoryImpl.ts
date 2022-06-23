import AuthentificationDAO from "../../Data/Authentification/AuthentificationDAO";
import RendezVousModelView from "../../../Presentation/pages/RendezVous/ModelView/RendezVous/RendezVousModelView";

export default class AuthentificationRepositoryImpl {
    private _authentificationDAO: AuthentificationDAO;

    constructor(readonly authentificationDAO: AuthentificationDAO) {
        this._authentificationDAO = authentificationDAO;
    }

    async authentificationUtilisateur(state: RendezVousModelView, urlRedirection: string) {
        const uuidDonnesUtilisateur = await this._authentificationDAO.sauvegardeDonneesUtilisateur(state);

        ["profils", "emailFiabilise"].forEach(itemName => sessionStorage.removeItem(itemName));

        this._authentificationDAO.initialiseConnexion(urlRedirection, uuidDonnesUtilisateur);
    }
}