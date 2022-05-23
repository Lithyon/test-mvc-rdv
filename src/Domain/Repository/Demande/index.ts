import {DemandeRepositoryImpl} from "./DemandeRepositoryImpl";
import DemandeDAO from "../../Data/Demande";

export {DemandeRepositoryImpl};

export default new DemandeRepositoryImpl(DemandeDAO);