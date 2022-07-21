import ContactDAO from "../../Data/Contact/ContactDAO";
import ContactEntity from "../../Data/API/Entity/ContactEntity";

export default class ContactRepositoryImpl {
    private _dataSource: ContactDAO;

    constructor(datasource: ContactDAO) {
        this._dataSource = datasource;
    }

    getContact(): Promise<ContactEntity> {
        return this._dataSource.getContact();
    }
}