import {DomaineRepositoryImpl} from "../../Repository/Domaine";

export default class DomaineServiceImpl {
    private readonly domaineRepo: DomaineRepositoryImpl;

    constructor(_domaineRepo: DomaineRepositoryImpl) {
        this.domaineRepo = _domaineRepo;
    }

    getDomaines() {
        return this.domaineRepo.getDomaines();
    }
}
