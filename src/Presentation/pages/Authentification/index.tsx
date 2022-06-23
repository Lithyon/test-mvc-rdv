import AuthentificationView from "./Authentification";
import AuthentificationController from "./AuthentificationController";
import CiviliteService from "../../../Domain/Services/Civilite";
import InformationsCommercialesService from "../../../Domain/Services/InformationsCommerciales";
import ParrainageService from "../../../Domain/Services/Parrainage";

export default function Authentification() {

    const controller = new AuthentificationController({
        civiliteService: CiviliteService,
        informationsCommercialesService: InformationsCommercialesService,
        parrainageService: ParrainageService
    });

    return <AuthentificationView controller={controller}/>;
}
