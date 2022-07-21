import CommunesDAO from "./CommunesDAO";
import {RequestMacif} from "../API/Commons/RequestMacif";
import CommunesRequestEntity from "../API/Entity/CommunesRequestEntity";
import CommuneEntity from "../API/Entity/CommuneEntity";

const BASE_URL = `${window.servicesRestBaseUrl || ""}/internet-donneesentreprise-rest/v1/codespostaux`;

export default class CommunesDAOImpl implements CommunesDAO {
    async getCommunes(request: CommunesRequestEntity): Promise<Array<CommuneEntity>> {
        const response = await fetch(
            new RequestMacif(
                `${BASE_URL}/_suggest?query=${request.rechercheCommune}&pageSize=${request.pageSize}&inLieuDit=${request.lieuDit}&inAncienNom=${request.ancienNom}`
            )
        );

        const {data, messages} = await response.json();

        if (messages) {
            messages.map((error: any) => {
                throw new Error(error);
            });
        }

        return data;
    }
}
