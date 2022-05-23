import {DomaineRepositoryImpl} from "../../Repository/Domaine";

export default class DomaineServiceImpl {
    private domaineRepo: DomaineRepositoryImpl;

    constructor(_domaineRepo: DomaineRepositoryImpl) {
        this.domaineRepo = _domaineRepo;
    }

    getDomaines() {
        return this.domaineRepo.getDomaines();
    }
}