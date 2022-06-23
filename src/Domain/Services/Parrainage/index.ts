import ParrainageServiceImpl from "./ParrainageServiceImpl";
import ParrainageRepository from "../../Repository/Parrainage";

export {ParrainageServiceImpl};

export default new ParrainageServiceImpl(ParrainageRepository)