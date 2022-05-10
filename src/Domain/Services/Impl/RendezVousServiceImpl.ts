import RendezVousRepository from "../../Repository/RendezVousRepository";
import RendezVous, {RendezVousDisponibilites, RendezVousDisponibilitesResponse} from "../../Model/RendezVous";
import RendezVousService from "../RendezVous";

export default class RendezVousServiceImpl implements RendezVousService {
    private rendezVousRepo: RendezVousRepository;

    constructor(_rendezVousRepo: RendezVousRepository) {
        this.rendezVousRepo = _rendezVousRepo;
    }

    creerRendezVous(rendezvous: RendezVous) {
        return this.rendezVousRepo.creerRendezVous(rendezvous);
    }

    getDisponibilites(disponibilites: RendezVousDisponibilites): Promise<RendezVousDisponibilitesResponse> {
        return this.rendezVousRepo.getDisponibilites(disponibilites);
    }
}