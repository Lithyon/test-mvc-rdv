import DomaineEntity from "./API/Entity/DomaineEntity";

export default interface DomaineDataSource {
    getDomaines(): Promise<DomaineEntity>;
}