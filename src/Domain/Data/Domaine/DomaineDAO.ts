import DomaineEntity from "../API/Entity/DomaineEntity";

export default interface DomaineDAO {
    getDomaines(): Promise<DomaineEntity>;
}
