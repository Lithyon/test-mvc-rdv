import ParrainageRepositoryImpl from "./ParrainageRepositoryImpl";
import {DefautParrainageChoix} from "../../Data/Enum/Parrainage";

export {ParrainageRepositoryImpl}

export default new ParrainageRepositoryImpl({defautParrainageChoix: DefautParrainageChoix});