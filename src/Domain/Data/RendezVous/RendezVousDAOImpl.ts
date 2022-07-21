import RendezVousDAO from "./RendezVousDAO";
import DisponibilitesEntity from "../API/Entity/DisponibilitesEntity";
import DisponibilitesRequestEntity from "../API/Entity/DisponibilitesRequestEntity";
import RendezVousRequestEntity from "../API/Entity/RendezVousRequestEntity";
import {RequestBuilder} from "../API/Commons/RequestBuilder";
import {ResponseEntity} from "../API/Entity/ResponseEntity";
import RendezVousEntity from "../API/Entity/RendezVousEntity";

const BASE_URL = `${window.servicesRestBaseUrl || ""}/internet-rendezvous-rest`;

export default class RendezVousDAOImpl implements RendezVousDAO {
    async creerRendezVous(request: RendezVousRequestEntity): Promise<RendezVousEntity> {
        const {data, messages} = await RequestBuilder
            .post<ResponseEntity<RendezVousEntity>>(`${BASE_URL}/v3/rendezvous/creer`)
            .appendHeader("Content-Type", "application/JSON")
            .body(request)
            .fetchJson();

        if (messages) {
            messages.forEach((error: string) => {
                throw new Error(error);
            });
        }

        return data;
    }

    async getDisponibilites(request: DisponibilitesRequestEntity): Promise<DisponibilitesEntity> {
        const {data, messages} = await RequestBuilder
            .post<ResponseEntity<DisponibilitesEntity>>(`${BASE_URL}/unprotected/v3/rendezvous/disponibilites`)
            .appendHeader("Content-Type", "application/JSON")
            .body(request)
            .fetchJson();

        if (messages) {
            messages.forEach((error: string) => {
                throw new Error(error);
            });
        }

        return data;
    }
}
