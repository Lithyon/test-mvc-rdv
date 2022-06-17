import CiviliteRepositoryImpl from "./CiviliteRepositoryImpl";
import {DefaultCivilite} from "../../Data/Enum/DefaultCivilite";

export {CiviliteRepositoryImpl}

export default new CiviliteRepositoryImpl({defaultCivilite: DefaultCivilite});