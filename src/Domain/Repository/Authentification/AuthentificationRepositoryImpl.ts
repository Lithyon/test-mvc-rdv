import AuthentificationDAO from "../../Data/Authentification/AuthentificationDAO";
import DonneesUtilisateurDAO from "../../Data/DonneesUtilisateur/DonneesUtilisateurDAO";
import RendezVousModelView from "../../../Presentation/pages/RendezVous/ModelView/RendezVous/RendezVousModelView";
import {getNavId} from "../../Data/API/Commons/GetNavId";

export default class AuthentificationRepositoryImpl {
    private _authentificationDAO: AuthentificationDAO;
    private _donneesUtilisateurDAO: DonneesUtilisateurDAO;

    constructor(readonly authentificationDAO: AuthentificationDAO, readonly donneesUtilisateurDAO: DonneesUtilisateurDAO) {
        this._authentificationDAO = authentificationDAO;
        this._donneesUtilisateurDAO = donneesUtilisateurDAO;
    }

    private static doPost(path: string, params: any) {
        // TODO: voir pour refacto plus proprement
        const form = document.createElement("form");
        form.method = "post";
        form.action = path;

        for (const key in params) {
            if (params[key]) {
                const hiddenField = document.createElement("input");
                hiddenField.type = "hidden";
                hiddenField.name = key;
                hiddenField.value = params[key];

                form.appendChild(hiddenField);
            }
        }

        document.body.appendChild(form);
        form.submit();
    }

    async authentificationUtilisateur(state: RendezVousModelView, urlRedirection: string): Promise<any> {
        // TODO: il y a dans rdv v 1 SessionStorageService.setItemJSON(FORMULAIRE_CREATION_RDV, state); a voir si nécessaire
        const uuidDonnesUtilisateur = await this._donneesUtilisateurDAO.sauvegardeDonneesUtilisateur(state);

        ["profils", "emailFiabilise"].forEach(itemName => sessionStorage.removeItem(itemName));

        const authentification = await this._authentificationDAO.initialiseConnexion(urlRedirection, uuidDonnesUtilisateur);

        AuthentificationRepositoryImpl.doPost(authentification.connectUri, {
            client_id: authentification.clientId,
            redirect_uri: authentification.redirectUri,
            pfidpadapterid: authentification.adapterId,
            scope: authentification.scope,
            state: authentification.state,
            nonce: authentification.nonce,
            response_type: authentification.responseType,
            nav_id: getNavId()
        })
    }
}