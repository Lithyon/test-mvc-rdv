import PointAccueilEntity from "./API/Entity/PointAccueilEntity";

export default interface PointAccueilDataSource {
    getPointAccueil(cdBuro: string): Promise<PointAccueilEntity>;
}
