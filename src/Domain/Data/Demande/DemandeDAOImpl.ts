import DemandeDAO from "./DemandeDAO";
import DemandeEntity from "../API/Entity/DemandeEntity";
import {myFetch} from "../API/Commons/MyFetch";

const BASE_URL = "/fwk-codification-rest";

export default class DemandeDAOImpl implements DemandeDAO {
    async getDemandes(): Promise<DemandeEntity> {
        const response = await myFetch<any>(
            `${BASE_URL}/codifications/nom/CD_TY_DEMAND_CLIENT?code_cible=5&numero_structures=324&code_langue=fra&code_application=1880`
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