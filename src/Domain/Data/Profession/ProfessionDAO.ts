import ProfessionEntity from "../API/Entity/ProfessionEntity";

export default interface ProfessionDAO {
    getProfession(): Promise<ProfessionEntity>;
}
