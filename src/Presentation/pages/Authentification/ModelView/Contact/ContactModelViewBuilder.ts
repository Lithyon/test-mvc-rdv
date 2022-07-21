import ContactModelView from "./ContactModelView";
import Contact from "../../../../../Domain/Model/Contact/Contact";

export default class ContactModelViewBuilder {
    static buildEmpty(): ContactModelView {
        return {
            telephones: [],
            email: ""
        };
    }

    static buildFromContact(contact: Contact): ContactModelView {
        return {
            telephones: contact.state.telephones.map(({noTeleLigne}) => noTeleLigne),
            email: contact.state.email.znAdrEmail
        };
    }
}
