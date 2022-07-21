import ContactEntity from "../src/Domain/Data/API/Entity/ContactEntity";

const contactStub: ContactEntity = {
    email: {
        znAdrEmail: "toto@gmail.com",
        fiable: true
    },
    telephones: [
        {
            cdLieuAppelTele: 0,
            liLieuAppelTele: "",
            noTeleLigne: "0102030405"
        }
    ]
};

export default contactStub;
