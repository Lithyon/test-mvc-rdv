import ContactRepositoryImpl from "./ContactRepositoryImpl";
import ContactDAO from "../../Data/Contact";

export {ContactRepositoryImpl};

export default new ContactRepositoryImpl(ContactDAO);
