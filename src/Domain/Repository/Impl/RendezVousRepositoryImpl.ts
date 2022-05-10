import RendezVousDAO from "../Data/RendezVousDAO";
import RendezVousRepository from "../RendezVousRepository";
import RendezVousRequest from "../../Model/RendezVous";
import RendezVous from "../../Model/RendezVous";
import DisponibilitesRequest from "../../Model/DisponibilitesRequest";
import Disponibilites from "../../Model/Disponibilites";

export class RendezVousRepositoryImpl implements RendezVousRepository {
    private _dataSource: RendezVousDAO;

    constructor(datasource: RendezVousDAO) {
        this._dataSource = datasource;
    }

    async creerRendezVous(rendezvous: RendezVousRequest) {
        return new RendezVous(await this._dataSource.creerRendezVous(rendezvous.etat));
    }

    async getDisponibilites(disponibilites: DisponibilitesRequest): Promise<Disponibilites> {
        return new Disponibilites(await this._dataSource.getDisponibilites(disponibilites.etat));
    }
}
