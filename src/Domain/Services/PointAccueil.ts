import PointAccueil from "../Model/PointAccueil";

export default interface PointAccueilService {
    getPointAccueil(cdBuro: string): Promise<PointAccueil>;
}
