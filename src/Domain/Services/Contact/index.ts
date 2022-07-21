import ContactServiceImpl from "./ContactServiceImpl";
import AuthentificationServiceImpl from "../Authentification/AuthentificationServiceImpl";
import ContactRepository from "../../Repository/Contact";
import AuthentificationRepository from "../../Repository/Authentification";

export {ContactServiceImpl, AuthentificationServiceImpl}

export default new ContactServiceImpl(ContactRepository, AuthentificationRepository);
