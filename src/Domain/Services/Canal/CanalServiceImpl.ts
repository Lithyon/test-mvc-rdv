import {CanalRepositoryImpl} from "../../Repository/Canal";
import Canal from "../../Model/Canal/Canal";

export default class CanalServiceImpl {
    private canalRepo: CanalRepositoryImpl;

    constructor(_canalRepo: CanalRepositoryImpl) {
        this.canalRepo = _canalRepo;
    }

    getDefaultCanal(cdBuro: string): Promise<Array<Canal>> {
        return this.canalRepo.getCanaux(cdBuro);
    }
}