import RendezVousDataSource from "../RendezVousDataSource";
import {myFetch} from "./Commons/TypedResponse";
import {
    RendezVousDisponibilitesRequestEntity,
    RendezVousDisponibilitesResponseEntity,
    RendezVousRequestEntity
} from "./Entity/RendezVousAPIEntity";

const BASE_URL = "/internet-rendezvous-rest";

export default class RendezVousAPIDataSourceImpl
    implements RendezVousDataSource {
    async creerRendezVous(request: RendezVousRequestEntity) {
        const response = await myFetch<any>(
            new Request(`${BASE_URL}/v2/rendezvous/agence/creer`, {
                method: "POST",
                headers: new Headers({
                    "Content-Type": "application/JSON",
                }),
                body: JSON.stringify(request)
            })
        );
        const {data, messages} = await response.json();
        // if (messages) {
        //   throw new Error("toto");
        // }
        return data;
    }

    async getDisponibilites(request: RendezVousDisponibilitesRequestEntity): Promise<RendezVousDisponibilitesResponseEntity> {
        const response = await myFetch<any>(
            new Request(`${BASE_URL}/unprotected/v2/rendezvous/agence/disponibilites`, {
                method: "POST",
                headers: new Headers({
                    "Content-Type": "application/JSON",
                }),
                body: JSON.stringify(request)
            })
        );

        const {data, messages} = await response.json();
        // if (messages) {
        //   throw new Error("toto");
        // }
        return data;
    }
}
