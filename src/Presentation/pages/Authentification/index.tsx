import AuthentificationView from "./Authentification";
import AuthentificationController from "./AuthentificationController";

export default function Authentification() {

    const controller = new AuthentificationController({});

    return <AuthentificationView controller={controller}/>;
}
