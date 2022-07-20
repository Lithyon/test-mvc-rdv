import {ChoixConnexionRepositoryImpl} from "../../Repository/ChoixConnexion";

export default class ChoixConnexionServiceImpl {
    private readonly choixConnexionRepo: ChoixConnexionRepositoryImpl;

    constructor(_choixConnexionRepo: ChoixConnexionRepositoryImpl) {
        this.choixConnexionRepo = _choixConnexionRepo;
    }

    getDefaultChoixConnexion() {
        return this.choixConnexionRepo.getDefaultChoixConnexion();
    }
}
