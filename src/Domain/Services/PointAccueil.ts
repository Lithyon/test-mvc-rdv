import PointAccueil from "../Model/PointAccueil/PointAccueil";

export default interface PointAccueilService {
    getPointAccueil(cdBuro: string): Promise<PointAccueil>;
}
