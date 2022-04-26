import {CanalCode} from "../Data/Enum/Canal";

export interface Canal {
    readonly libelle: string,
    readonly code: CanalCode
}

export interface CanalRepositoryDependencies {
    readonly defaultCanalDataSource: Array<Canal>;
}

export default interface CanalRepository {
    readonly dependencies: CanalRepositoryDependencies

    getDefaultCanal(): Array<Canal>;
}