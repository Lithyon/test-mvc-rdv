import CreationCompteServiceImpl from "./CreationCompteServiceImpl";
import RendezVousServiceImpl from "../RendezVous/RendezVousServiceImpl";
import CreationCompteRepository from "../../Repository/CreationCompte";
import RendezVousRepository from "../../Repository/RendezVous";
import CommunesRepository from "../../Repository/Communes";
import IdentiteRepository from "../../Repository/Identite";
import AuthentificationJahiaRepositoryImpl from "../../Repository/AuthentificationJahia";

export {CreationCompteServiceImpl};
export {RendezVousServiceImpl};

export default new CreationCompteServiceImpl(
    CreationCompteRepository, RendezVousRepository, CommunesRepository, IdentiteRepository, AuthentificationJahiaRepositoryImpl);
