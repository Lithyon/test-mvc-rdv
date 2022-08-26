import PointAccueilServiceImpl from "./PointAccueilServiceImpl";
import PointAccueilRepository from "../../Repository/PointAccueil";

export {PointAccueilServiceImpl};
export default new PointAccueilServiceImpl(PointAccueilRepository);
