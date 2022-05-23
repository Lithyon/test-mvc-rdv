import {CanalRepositoryImpl} from "../../Repository/Canal";

export default class CanalServiceImpl {
    private canalRepo: CanalRepositoryImpl;

    constructor(_canalRepo: CanalRepositoryImpl) {
        this.canalRepo = _canalRepo;
    }

    getDefaultCanal() {
        return this.canalRepo.getDefaultCanal();
    }
}