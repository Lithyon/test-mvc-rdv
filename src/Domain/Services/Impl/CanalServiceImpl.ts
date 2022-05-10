import CanalRepository from "../../Repository/CanalRepository";
import CanalService from "../Canal";

export default class CanalServiceImpl implements CanalService {
    private canalRepo: CanalRepository;

    constructor(_canalRepo: CanalRepository) {
        this.canalRepo = _canalRepo;
    }

    getDefaultCanal() {
        return this.canalRepo.getDefaultCanal();
    }
}