import {Canal} from "../../Data/Enum/Canal";
import {CanalRepositoryDependencies} from "./CanalRepository";

export default class CanalRepositoryImpl {

    constructor(readonly dependencies: CanalRepositoryDependencies) {
    }

    getDefaultCanal(): Array<Canal> {
        return this.dependencies.defaultCanalDataSource;
    }
}