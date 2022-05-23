import RendezVousDAO from "./RendezVousDAO";
import DisponibilitesEntity from "../API/Entity/DisponibilitesEntity";
import DisponibilitesRequestEntity from "../API/Entity/DisponibilitesRequestEntity";
import RendezVousRequestEntity from "../API/Entity/RendezVousRequestEntity";
import {myFetch} from "../API/Commons/MyFetch";

const BASE_URL = "/internet-rendezvous-rest";

export default class RendezVousDAOImpl
    implements RendezVousDAO {
    async creerRendezVous(request: RendezVousRequestEntity) {
        const response = await myFetch<any>(
            new Request(`${BASE_URL}/v3/rendezvous/agence/creer`, {
                method: "POST",
                headers: new Headers({
                    "Content-Type": "application/JSON",
                }),
                body: JSON.stringify(request)
            })
        );

        const {data, messages} = await response.json();

        if (messages) {
            messages.map((error: any) => {
                throw new Error(error)
            });
        }

        return data;
    }

    async getDisponibilites(request: DisponibilitesRequestEntity): Promise<DisponibilitesEntity> {
        const response = await myFetch<any>(
            new Request(`${BASE_URL}/unprotected/v3/rendezvous/disponibilites`, {
                method: "POST",
                headers: new Headers({
                    "Content-Type": "application/JSON",
                }),
                body: JSON.stringify(request)
            })
        );

        const {data, messages} = await response.json();

        if (messages) {
            messages.map((error: any) => {
                throw new Error(error)
            });
        }

        return data;
    }
}
