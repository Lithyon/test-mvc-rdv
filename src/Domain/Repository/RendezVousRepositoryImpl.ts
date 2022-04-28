import RendezVousDataSource from "./Data/RendezVousDataSource";
import RendezVous, {RendezVousDisponibilites, RendezVousDisponibilitesResponse, RendezVousResponse} from "../Model/RendezVous";
import {RendezVousRepository} from "./RendezVousRepository";

export class RendezVousRepositoryImpl implements RendezVousRepository {
    private _dataSource: RendezVousDataSource;

    constructor(datasource: RendezVousDataSource) {
        this._dataSource = datasource;
    }

    async creerRendezVous(rendezvous: RendezVous) {
        return new RendezVousResponse(await this._dataSource.creerRendezVous(rendezvous.etat));
    }

    async getDisponibilites(disponibilites: RendezVousDisponibilites): Promise<RendezVousDisponibilitesResponse> {
        return new RendezVousDisponibilitesResponse(await this._dataSource.getDisponibilites(disponibilites.etat));
    }
}
