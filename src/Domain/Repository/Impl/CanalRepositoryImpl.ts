import CanalRepository, {CanalRepositoryDependencies} from "../CanalRepository";
import {Canal} from "../Data/Enum/Canal";

export default class CanalRepositoryImpl implements CanalRepository {

    constructor(readonly dependencies: CanalRepositoryDependencies) {
    }

    getDefaultCanal(): Array<Canal> {
        return this.dependencies.defaultCanalDataSource;
    }
}