import RendezVousRequest from "../../Model/RendezVous/RendezVousRequest";
import DisponibilitesRequest from "../../Model/Disponibilites/DisponibilitesRequest";
import {RendezVousRepositoryImpl} from "../../Repository/RendezVous";

export default class RendezVousServiceImpl {
    private readonly rendezVousRepo: RendezVousRepositoryImpl;

    constructor(_rendezVousRepo: RendezVousRepositoryImpl) {
        this.rendezVousRepo = _rendezVousRepo;
    }

    creerRendezVous(rendezvous: RendezVousRequest) {
        return this.rendezVousRepo.creerRendezVous(rendezvous);
    }

    getDisponibilites(disponibilites: DisponibilitesRequest) {
        return this.rendezVousRepo.getDisponibilites(disponibilites);
    }
}
