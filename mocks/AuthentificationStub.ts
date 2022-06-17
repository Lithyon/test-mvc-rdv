import AuthentificationEntity from "../src/Domain/Data/API/Entity/AuthentificationEntity";

const authentificationStub: AuthentificationEntity = {
    connectUri: "https://connect.recette.macif.fr/app/v1/accounts/authentication",
    responseType: "code",
    clientId: "macif.fr_U08",
    redirectUri: "http://ssm.u08.recette.macif.fr/internet-authentification-rest/v1/sessions/callback",
    scope: "openid profile_macif",
    state: "-3aka1f3lgkg88h",
    nonce: "tW7w7EM0uIkTsETg34UDc-0gELty4u9fLUrF91MxpgEU8qLSV9wqhxAg0or7YUVA",
    adapterId: "InternautesU08",
    timeFrame: "600",
    requestUri: "https://gwxml-dmz-entrant-vip.recette.macif.fr/internet-authentification-rest-u08/private/unprotected/v1/jwt/null"
}

export default authentificationStub;