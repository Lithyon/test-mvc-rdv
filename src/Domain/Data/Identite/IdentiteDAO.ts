import IdentiteEntity from "../API/Entity/IdentiteEntity";

export default interface IdentiteDAO {
    getIdentite(): Promise<IdentiteEntity>;
}
