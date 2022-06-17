import CiviliteServiceImpl from "./CiviliteServiceImpl";
import CiviliteRepository from "../../Repository/Civilite";

export {CiviliteServiceImpl};

export default new CiviliteServiceImpl(CiviliteRepository)