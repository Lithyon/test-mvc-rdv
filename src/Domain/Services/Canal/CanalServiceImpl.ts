import {CanalRepositoryImpl} from "../../Repository/Canal";
import Canal from "../../Model/Canal/Canal";

export default class CanalServiceImpl {
    private readonly canalRepo: CanalRepositoryImpl;

    constructor(_canalRepo: CanalRepositoryImpl) {
        this.canalRepo = _canalRepo;
    }

    getCanaux(cdBuro: string): Promise<Array<Canal>> {
        return this.canalRepo.getCanaux(cdBuro);
    }
}
