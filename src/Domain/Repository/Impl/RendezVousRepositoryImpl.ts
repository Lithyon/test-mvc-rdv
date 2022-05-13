import RendezVousDAO from "../Data/RendezVousDAO";
import RendezVousRepository from "../RendezVousRepository";
import DisponibilitesRequest from "../../Model/Disponibilites/DisponibilitesRequest";
import Disponibilites from "../../Model/Disponibilites/Disponibilites";
import RendezVousRequest from "../../Model/RendezVous/RendezVousRequest";
import RendezVous from "../../Model/RendezVous/RendezVous";

export class RendezVousRepositoryImpl implements RendezVousRepository {
    private _dataSource: RendezVousDAO;

    constructor(datasource: RendezVousDAO) {
        this._dataSource = datasource;
    }

    async creerRendezVous(rendezvous: RendezVousRequest) {
        return new RendezVous(await this._dataSource.creerRendezVous(rendezvous.state));
    }

    async getDisponibilites(disponibilites: DisponibilitesRequest): Promise<Disponibilites> {
        return new Disponibilites(await this._dataSource.getDisponibilites(disponibilites.state));
    }
}
