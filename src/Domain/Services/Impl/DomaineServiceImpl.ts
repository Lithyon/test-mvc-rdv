import DomaineRepository from "../../Repository/DomaineRepository";
import DomaineService from "../Domaine";

export default class DomaineServiceImpl implements DomaineService {
    private domaineRepo: DomaineRepository;

    constructor(_domaineRepo: DomaineRepository) {
        this.domaineRepo = _domaineRepo;
    }

    getDomaines() {
        return this.domaineRepo.getDomaines();
    }
}