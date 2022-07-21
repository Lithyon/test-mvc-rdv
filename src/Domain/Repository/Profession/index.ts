import {ProfessionRepositoryImpl} from "./ProfessionRepositoryImpl";
import ProfessionDAO from "../../Data/Profession";

export {ProfessionRepositoryImpl};

export default new ProfessionRepositoryImpl(ProfessionDAO);
