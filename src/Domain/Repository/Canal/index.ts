import CanalRepositoryImpl from "./CanalRepositoryImpl";
import DefaultCanal from "../../Data/Enum/Canal";

export {CanalRepositoryImpl};

export default new CanalRepositoryImpl({defaultCanalDataSource: DefaultCanal});
