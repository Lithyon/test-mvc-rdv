import AuthentificationController from "../../../../Presentation/pages/Authentification/AuthentificationController";
import {CiviliteServiceImpl} from "../../../../Domain/Services/Civilite";
import {CiviliteRepositoryImpl} from "../../../../Domain/Repository/Civilite";
import {DefaultCivilite} from "../../../../Domain/Data/Enum/DefaultCivilite";
import {InformationsCommercialesRepositoryImpl} from "../../../../Domain/Repository/InformationsCommerciales";
import {InformationsCommercialesServiceImpl} from "../../../../Domain/Services/InformationsCommerciales";
import {DefaultInformationsCommerciales} from "../../../../Domain/Data/Enum/InformationsCommerciales";
import ParrainageServiceImpl from "../../../../Domain/Services/Parrainage/ParrainageServiceImpl";
import {ParrainageRepositoryImpl} from "../../../../Domain/Repository/Parrainage";
import {DefautParrainageChoix} from "../../../../Domain/Data/Enum/Parrainage";
import {CreationCompteServiceImpl} from "../../../../Domain/Services/CreationCompte";
import {CreationCompteRepositoryImpl} from "../../../../Domain/Repository/CreationCompte";

export function init() {
    const creationCompteRepository = new CreationCompteRepositoryImpl();
    const creationCompteService = new CreationCompteServiceImpl(creationCompteRepository);

    const civiliteRepository = new CiviliteRepositoryImpl({defaultCivilite: DefaultCivilite});
    const civiliteService = new CiviliteServiceImpl(civiliteRepository);

    const parrainageRepository = new ParrainageRepositoryImpl({defautParrainageChoix: DefautParrainageChoix});
    const parrainageService = new ParrainageServiceImpl(parrainageRepository);

    const informationsCommercialesRepository = new InformationsCommercialesRepositoryImpl({
        defaultInformationsCommerciales: DefaultInformationsCommerciales
    });
    const informationsCommercialesService = new InformationsCommercialesServiceImpl(informationsCommercialesRepository);

    return new AuthentificationController({creationCompteService, civiliteService, informationsCommercialesService, parrainageService});
}