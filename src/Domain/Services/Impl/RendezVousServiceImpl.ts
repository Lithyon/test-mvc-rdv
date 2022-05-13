import RendezVousRepository from "../../Repository/RendezVousRepository";
import RendezVousService from "../RendezVous";
import RendezVousRequest from "../../Model/RendezVous/RendezVousRequest";
import DisponibilitesRequest from "../../Model/Disponibilites/DisponibilitesRequest";
import Disponibilites from "../../Model/Disponibilites/Disponibilites";

export default class RendezVousServiceImpl implements RendezVousService {
    private rendezVousRepo: RendezVousRepository;

    constructor(_rendezVousRepo: RendezVousRepository) {
        this.rendezVousRepo = _rendezVousRepo;
    }

    creerRendezVous(rendezvous: RendezVousRequest) {
        return this.rendezVousRepo.creerRendezVous(rendezvous);
    }

    getDisponibilites(disponibilites: DisponibilitesRequest): Promise<Disponibilites> {
        return this.rendezVousRepo.getDisponibilites(disponibilites);
    }
}