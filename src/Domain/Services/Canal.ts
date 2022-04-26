import {Canal, CanalRepository} from "../Repository/CanalRepository";

export interface CanalService {
    getDefaultCanal(): Array<Canal>;
}

export class CanalService implements CanalService {
    private canalRepo: CanalRepository;

    constructor(_canalRepo: CanalRepository) {
        this.canalRepo = _canalRepo;
    }

    getDefaultCanal() {
        return this.canalRepo.getDefaultCanal();
    }
}
