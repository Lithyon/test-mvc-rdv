import {AuthentificationRepositoryImpl} from "../../Repository/Authentification";
import RendezVousModelView from "../../../Presentation/pages/RendezVous/ModelView/RendezVous/RendezVousModelView";

export default class AuthentificationServiceImpl {
    private authentificationRepo: AuthentificationRepositoryImpl;

    constructor(_authentificationRepo: AuthentificationRepositoryImpl) {
        this.authentificationRepo = _authentificationRepo;
    }

    authentificationUtilisateur(state: RendezVousModelView, urlRedirection: string) {
        return this.authentificationRepo.authentificationUtilisateur(state, urlRedirection);
    }
}