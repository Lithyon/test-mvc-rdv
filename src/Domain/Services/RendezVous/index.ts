import RendezVousServiceImpl from "./RendezVousServiceImpl";
import RendezVousRepository from "../../Repository/RendezVous";

export {RendezVousServiceImpl};
export default new RendezVousServiceImpl(RendezVousRepository);
