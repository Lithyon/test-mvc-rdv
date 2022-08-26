import DemandeServiceImpl from "./DemandeServiceImpl";
import DemandeRepository from "../../Repository/Demande";

export {DemandeServiceImpl};

export default new DemandeServiceImpl(DemandeRepository);
