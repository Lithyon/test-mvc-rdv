import AuthentificationView from "./Authentification";
import AuthentificationController from "./AuthentificationController";
import CiviliteService from "../../../Domain/Services/Civilite";
import InformationsCommercialesService from "../../../Domain/Services/InformationsCommerciales";

export default function Authentification() {

    const controller = new AuthentificationController({
        civiliteService: CiviliteService,
        informationsCommercialesService: InformationsCommercialesService
    });

    return <AuthentificationView controller={controller}/>;
}
