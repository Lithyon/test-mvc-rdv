import CreationCompteServiceImpl from "./CreationCompteServiceImpl";
import CreationCompteRepository from "../../Repository/CreationCompte";

export {CreationCompteServiceImpl};

export default new CreationCompteServiceImpl(CreationCompteRepository)