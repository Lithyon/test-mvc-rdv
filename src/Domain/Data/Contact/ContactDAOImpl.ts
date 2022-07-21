import ContactDAO from "./ContactDAO";
import ContactEntity from "../API/Entity/ContactEntity";
import {RequestBuilder} from "../API/Commons/RequestBuilder";
import {ResponseEntity} from "../API/Entity/ResponseEntity";

const BASE_URL = `${window.servicesRestBaseUrl || ""}/internet-espaceclient-rest`;

export default class ContactDAOImpl implements ContactDAO {
    async getContact(): Promise<ContactEntity> {
        const {data, messages} = await RequestBuilder
            .get<ResponseEntity<ContactEntity>>(`${BASE_URL}/v1/contacts/macif`)
            .fetchJson();

        if (messages) {
            messages.forEach((error: string) => {
                throw new Error(error);
            });
        }

        return data;
    }
}
