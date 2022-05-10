import PointAccueilRepository from "../../Repository/PointAccueilRepository";
import PointAccueilService from "../PointAccueil";

export default class PointAccueilServiceImpl implements PointAccueilService {
    private pointAccueilRepo: PointAccueilRepository;

    constructor(_pointAccueilRepo: PointAccueilRepository) {
        this.pointAccueilRepo = _pointAccueilRepo;
    }

    getPointAccueil(cdBuro: string) {
        return this.pointAccueilRepo.getPointAccueil(cdBuro);
    }
}