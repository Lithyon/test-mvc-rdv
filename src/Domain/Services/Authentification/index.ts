import AuthentificationServiceImpl from "./AuthentificationServiceImpl";
import AuthentificationRepository from "../../Repository/Authentification";

export {AuthentificationServiceImpl};

export default new AuthentificationServiceImpl(AuthentificationRepository);
