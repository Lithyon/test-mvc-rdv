import PointAccueil from "../Model/PointAccueil";

export default interface PointAccueilRepository {
    getPointAccueil(cdBuro: string): Promise<PointAccueil>;
}
