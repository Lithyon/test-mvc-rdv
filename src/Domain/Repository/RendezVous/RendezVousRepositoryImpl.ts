import RendezVousDAO from "../../Data/RendezVous/RendezVousDAO";
import DisponibilitesRequest from "../../Model/Disponibilites/DisponibilitesRequest";
import Disponibilites from "../../Model/Disponibilites/Disponibilites";
import RendezVousRequest from "../../Model/RendezVous/RendezVousRequest";
import RendezVous from "../../Model/RendezVous/RendezVous";

export class RendezVousRepositoryImpl {
    private readonly _dataSource: RendezVousDAO;

    constructor(datasource: RendezVousDAO) {
        this._dataSource = datasource;
    }

    async creerRendezVous(rendezvous: RendezVousRequest) {
        return new RendezVous(await this._dataSource.creerRendezVous(rendezvous.state));
    }

    async getDisponibilites(disponibilites: DisponibilitesRequest) {
        return new Disponibilites(await this._dataSource.getDisponibilites(disponibilites.state));
    }
}
