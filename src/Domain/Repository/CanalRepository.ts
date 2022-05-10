import {Canal} from "./Data/Enum/Canal";

export interface CanalRepositoryDependencies {
    readonly defaultCanalDataSource: Array<Canal>;
}

export default interface CanalRepository {
    readonly dependencies: CanalRepositoryDependencies

    getDefaultCanal(): Array<Canal>;
}