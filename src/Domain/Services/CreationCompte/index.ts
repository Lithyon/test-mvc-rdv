import CreationCompteServiceImpl from "./CreationCompteServiceImpl";
import RendezVousServiceImpl from "../RendezVous/RendezVousServiceImpl";
import CreationCompteRepository from "../../Repository/CreationCompte";
import RendezVousRepository from "../../Repository/RendezVous";
import CommunesRepository from "../../Repository/Communes";
import IdentiteRepository from "../../Repository/Identite";

export {CreationCompteServiceImpl};
export {RendezVousServiceImpl};

export default new CreationCompteServiceImpl(CreationCompteRepository, RendezVousRepository, CommunesRepository, IdentiteRepository);
