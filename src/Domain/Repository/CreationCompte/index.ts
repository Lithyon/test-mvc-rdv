import CreationCompteRepositoryImpl from "./CreationCompteRepositoryImpl";
import CreationCompteDAO from "../../Data/CreationCompte";

export {CreationCompteRepositoryImpl};

export default new CreationCompteRepositoryImpl(CreationCompteDAO);
