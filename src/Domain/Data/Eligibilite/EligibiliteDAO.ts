import EligibiliteEntity from "../API/Entity/EligibiliteEntity";

export default interface EligibiliteDAO {
    getEligibilites(cdBuro: string): Promise<EligibiliteEntity>;
}