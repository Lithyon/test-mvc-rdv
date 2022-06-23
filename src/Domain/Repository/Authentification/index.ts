import AuthentificationDAO from "../../Data/Authentification";
import AuthentificationRepositoryImpl from "./AuthentificationRepositoryImpl";

export {AuthentificationRepositoryImpl};

export default new AuthentificationRepositoryImpl(AuthentificationDAO);
