import {CommunesRepositoryImpl} from "./CommunesRepositoryImpl";
import CommunesDAO from "../../Data/Communes";

export {CommunesRepositoryImpl};

export default new CommunesRepositoryImpl(CommunesDAO);
