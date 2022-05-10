import PointAccueil from "../Model/PointAccueil/PointAccueil";

export default interface PointAccueilRepository {
    getPointAccueil(cdBuro: string): Promise<PointAccueil>;
}
