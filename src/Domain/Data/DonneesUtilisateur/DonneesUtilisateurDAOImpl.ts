import {UserDataService} from "maciffr-services-js";
import DonneesUtilisateurDAO from "./DonneesUtilisateurDAO";
import RendezVousModelView from "../../../Presentation/pages/RendezVous/ModelView/RendezVous/RendezVousModelView";


export default class DonneesUtilisateurDAOImpl implements DonneesUtilisateurDAO {
    async sauvegardeDonneesUtilisateur(state: RendezVousModelView): Promise<string> {
        return UserDataService.saveUserData([
            {itemName: "formulaire_creation_rdv", itemValue: state}
        ]);

    }
}
