import RendezVousDAO from "./RendezVousDAO";
import DisponibilitesEntity from "../API/Entity/DisponibilitesEntity";
import DisponibilitesRequestEntity from "../API/Entity/DisponibilitesRequestEntity";
import RendezVousRequestEntity from "../API/Entity/RendezVousRequestEntity";
import {RequestMacif} from "../API/Commons/RequestMacif";
import {HeadersMacif} from "../API/Commons/HeadersMacif";

const BASE_URL = `${window.servicesRestBaseUrl || ""}/internet-rendezvous-rest`;

export default class RendezVousDAOImpl
    implements RendezVousDAO {
    async creerRendezVous(request: RendezVousRequestEntity) {
        const response = await fetch(
            new RequestMacif(`${BASE_URL}/v3/rendezvous/agence/creer`, {
                method: "POST",
                headers: new HeadersMacif({
                    "Content-Type": "application/JSON",
                }),
                body: JSON.stringify(request)
            })
        )

        const {data, messages} = await response.json();

        if (messages) {
            messages.map((error: any) => {
                throw new Error(error)
            });
        }

        return data;
    }

    async getDisponibilites(request: DisponibilitesRequestEntity): Promise<DisponibilitesEntity> {
        const response = await fetch(
            new RequestMacif(`${BASE_URL}/unprotected/v3/rendezvous/disponibilites`, {
                method: "POST",
                headers: new HeadersMacif({
                    "Content-Type": "application/JSON",
                }),
                body: JSON.stringify(request)
            })
        )

        const {data, messages} = await response.json();

        if (messages) {
            messages.map((error: any) => {
                throw new Error(error)
            });
        }

        return data;
    }
}
