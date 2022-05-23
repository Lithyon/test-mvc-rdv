import {RendezVousRepositoryImpl} from "./RendezVousRepositoryImpl";
import RendezVousDAO from "../../Data/RendezVous";

export {RendezVousRepositoryImpl};

export default new RendezVousRepositoryImpl(RendezVousDAO);