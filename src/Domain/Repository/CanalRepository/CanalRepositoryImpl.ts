import CanalRepository, {Canal, CanalRepositoryDependencies} from "./CanalRepository";

export default class CanalRepositoryImpl implements CanalRepository {

    constructor(readonly dependencies: CanalRepositoryDependencies) { }

    getDefaultCanal(): Array<Canal> {
        return this.dependencies.defaultCanalDataSource;
    }
}