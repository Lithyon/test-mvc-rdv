import PointAccueilEntity from "./API/Entity/PointAccueilEntity";

export default interface PointAccueilDAO {
    getPointAccueil(cdBuro: string): Promise<PointAccueilEntity>;
}
