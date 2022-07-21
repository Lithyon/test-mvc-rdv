import SituationFamilialeDAO from "./SituationFamilialeDAO";
import SituationFamilialeEntity from "../API/Entity/SituationFamilialeEntity";
import {RequestMacif} from "../API/Commons/RequestMacif";

const BASE_URL = `${window.servicesRestBaseUrl || ""}/fwk-codification-rest`;

export default class SituationFamilialeDAOImpl implements SituationFamilialeDAO {
    async getSituationFamiliale(): Promise<SituationFamilialeEntity> {
        const response = await fetch(
            new RequestMacif(`${BASE_URL}/codifications/nom/CD_SITUAT_FAMIL?code_cible=5&numero_structures=324&code_langue=fra&code_application=1880`)
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
