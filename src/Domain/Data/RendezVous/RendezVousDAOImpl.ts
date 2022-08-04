import RendezVousDAO from "./RendezVousDAO";
import DisponibilitesEntity from "../API/Entity/DisponibilitesEntity";
import DisponibilitesRequestEntity from "../API/Entity/DisponibilitesRequestEntity";
import RendezVousRequestEntity from "../API/Entity/RendezVousRequestEntity";
import {RequestBuilder} from "../API/Commons/RequestBuilder";
import {ResponseEntity} from "../API/Entity/ResponseEntity";

const BASE_URL = `${window.servicesRestBaseUrl || ""}/internet-rendezvous-rest`;

export default class RendezVousDAOImpl implements RendezVousDAO {
    async creerRendezVous(request: RendezVousRequestEntity): Promise<void> {
        try {
            await RequestBuilder
                .post<ResponseEntity<void>>(`${BASE_URL}/v3/rendezvous/creer`)
                .appendHeader("Content-Type", "application/JSON")
                .body(request)
                .onlyFetch();
        } catch (error: any) {
            throw new Error(error);
        }
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
