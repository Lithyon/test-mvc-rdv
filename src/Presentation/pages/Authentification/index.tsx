import AuthentificationView from "./Authentification";
import AuthentificationController from "./AuthentificationController";
import CiviliteService from "../../../Domain/Services/Civilite";
import InformationsCommercialesService from "../../../Domain/Services/InformationsCommerciales";
import ParrainageService from "../../../Domain/Services/Parrainage";
import CreationCompteService from "../../../Domain/Services/CreationCompte";

export default function Authentification() {

    const controller = new AuthentificationController({
        creationCompteService: CreationCompteService,
        civiliteService: CiviliteService,
        informationsCommercialesService: InformationsCommercialesService,
        parrainageService: ParrainageService
    });

    return <AuthentificationView controller={controller}/>;
}
