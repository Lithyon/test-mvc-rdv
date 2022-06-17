import AuthentificationDAO from "../../Data/Authentification";
import DonneesUtilisateurDAO from "../../Data/DonneesUtilisateur";
import AuthentificationRepositoryImpl from "./AuthentificationRepositoryImpl";

export {AuthentificationRepositoryImpl};

export default new AuthentificationRepositoryImpl(AuthentificationDAO, DonneesUtilisateurDAO);
