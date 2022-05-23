import {DemandeRepositoryImpl} from "../../Repository/Demande";

export default class DemandeServiceImpl {
    private demandeRepo: DemandeRepositoryImpl;

    constructor(_demandeRepo: DemandeRepositoryImpl) {
        this.demandeRepo = _demandeRepo;
    }

    getDemandes(domaineSelected: string) {
        return this.demandeRepo.getDemandes(domaineSelected);
    }
}