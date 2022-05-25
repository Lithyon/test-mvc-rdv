import ChoixConnexionRepositoryImpl from "./ChoixConnexionRepositoryImpl";
import DefaultChoixConnexion from "../../Data/Enum/ChoixConnexion";

export {ChoixConnexionRepositoryImpl};

export default new ChoixConnexionRepositoryImpl({defaultChoixConnexion: DefaultChoixConnexion});
