import ChoixConnexionServiceImpl from "./ChoixConnexionServiceImpl";
import ChoixConnexionRepository from "../../Repository/ChoixConnexion";

export {ChoixConnexionServiceImpl};

export default new ChoixConnexionServiceImpl(ChoixConnexionRepository);
