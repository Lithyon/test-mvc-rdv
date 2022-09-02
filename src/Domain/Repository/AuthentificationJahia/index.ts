import AuthentificationJahiaDAO from "../../Data/AuthentificationJahia";
import {AuthentificationJahiaRepositoryImpl} from "./AuthentificationJahiaRepositoryImpl";

export {AuthentificationJahiaRepositoryImpl};

export default new AuthentificationJahiaRepositoryImpl(AuthentificationJahiaDAO);
