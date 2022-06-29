import CreationCompteServiceImpl from "./CreationCompteServiceImpl";
import RendezVousServiceImpl from "../RendezVous/RendezVousServiceImpl";
import CreationCompteRepository from "../../Repository/CreationCompte";
import RendezVousRepository from "../../Repository/RendezVous";

export {CreationCompteServiceImpl};
export {RendezVousServiceImpl};

export default new CreationCompteServiceImpl(CreationCompteRepository, RendezVousRepository)