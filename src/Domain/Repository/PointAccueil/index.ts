import {PointAccueilRepositoryImpl} from "./PointAccueilRepositoryImpl";
import PointAccueilDAO from "../../Data/PointAccueil";

export {PointAccueilRepositoryImpl};

export default new PointAccueilRepositoryImpl(PointAccueilDAO);
