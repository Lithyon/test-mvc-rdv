import DemandeRepository from "../../Repository/DemandeRepository";
import DemandeService from "../Demande";

export default class DemandeServiceImpl implements DemandeService {
    private demandeRepo: DemandeRepository;

    constructor(_demandeRepo: DemandeRepository) {
        this.demandeRepo = _demandeRepo;
    }

    getDemandes(domaineSelected: string) {
        return this.demandeRepo.getDemandes(domaineSelected);
    }
}