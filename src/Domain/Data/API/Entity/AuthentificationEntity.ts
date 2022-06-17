export default interface AuthentificationEntity {
    connectUri: string;
    responseType: string;
    clientId: string;
    redirectUri: string;
    scope: string;
    state: string;
    nonce: string;
    adapterId: string;
    timeFrame: string;
    requestUri: string;
}