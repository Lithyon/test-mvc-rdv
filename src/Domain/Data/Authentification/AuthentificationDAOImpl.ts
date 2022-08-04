import AuthentificationDAO from "./AuthentificationDAO";
import AuthentificationEntity from "../API/Entity/AuthentificationEntity";
import {RequestBuilder} from "../API/Commons/RequestBuilder";
import {ResponseEntity} from "../API/Entity/ResponseEntity";
import RendezVousModelView from "../../../Presentation/pages/RendezVous/ModelView/RendezVous/RendezVousModelView";
import {getNavId} from "../API/Commons/GetNavId";
import {getCookie} from "../API/Commons/Cookie";
import {CookieKeysEnum} from "../Enum/CookieKeysEnum";

const BASE_URL = `${window.servicesRestBaseUrl || ""}/internet-authentification-rest`;

export default class AuthentificationDAOImpl implements AuthentificationDAO {
    private static doPost(path: string, params: { [key: string]: string }): void {
        const form: HTMLFormElement = document.createElement("form");
        form.method = "post";
        form.action = path;

        for (const key in params) {
            if (params[key]) {
                const hiddenField = document.createElement("input");
                hiddenField.type = "hidden";
                hiddenField.name = key;
                hiddenField.value = params[key];

                form.appendChild(hiddenField);
            }
        }

        document.body.appendChild(form);
        form.submit();
    }

    async initialiseConnexion(urlRedirection: string, uuid: string) {
        const {data, messages} = await RequestBuilder
            .post<ResponseEntity<AuthentificationEntity>>(`${BASE_URL}/v1/sessions/initiate`)
            .appendHeader("Content-Type", "application/JSON")
            .body({
                returnUri: urlRedirection,
                uuidUserData: uuid,
                flowId: "authentification"
            })
            .fetchJson();

        if (messages) {
            messages.forEach((error: string) => {
                throw new Error(error);
            });
        }

        AuthentificationDAOImpl.doPost(data.connectUri, {
            client_id: data.clientId,
            redirect_uri: data.redirectUri,
            pfidpadapterid: data.adapterId,
            scope: data.scope,
            state: data.state,
            nonce: data.nonce,
            response_type: data.responseType,
            nav_id: getNavId() || ""
        });
    }

    async sauvegardeDonneesUtilisateur(state: RendezVousModelView) {
        const {data, messages} = await RequestBuilder
            .post<ResponseEntity<string>>(`${BASE_URL}/v1/sessions/userdata`)
            .appendHeader("Content-Type", "application/JSON")
            .body([
                    {itemName: "formulaire_creation_rdv", itemValue: state}
                ]
            )
            .fetchJson();

        if (messages) {
            messages.forEach((error: string) => {
                throw new Error(error);
            });
        }

        return data;
    }

    estConnecte(): boolean {
        return !!getCookie(CookieKeysEnum.MFS_AUTH);
    }
}
