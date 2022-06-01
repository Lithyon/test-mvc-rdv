import CanalRepositoryImpl from "./CanalRepositoryImpl";
import EligibiliteDAO from "../../Data/Eligibilite";

export {CanalRepositoryImpl};

export default new CanalRepositoryImpl(EligibiliteDAO);
