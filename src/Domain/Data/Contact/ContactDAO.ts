import ContactEntity from "../API/Entity/ContactEntity";

export default interface ContactDAO {
    getContact(): Promise<ContactEntity>;
}
