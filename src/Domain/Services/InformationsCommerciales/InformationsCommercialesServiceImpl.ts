import InformationsCommercialesRepositoryImpl from "../../Repository/InformationsCommerciales/InformationsCommercialesRepositoryImpl";

export default class InformationsCommercialesServiceImpl {
    private informationsCommercialesRepo: InformationsCommercialesRepositoryImpl;

    constructor(_informationsCommercialesRepo: InformationsCommercialesRepositoryImpl) {
        this.informationsCommercialesRepo = _informationsCommercialesRepo;
    }

    getDefaultInformationsCommerciales() {
        return this.informationsCommercialesRepo.getDefaultInformationsCommerciales()
    }
}