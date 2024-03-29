import DemandeEntity from "../../../../Domain/Data/API/Entity/DemandeEntity";
import demandeStub from "../../../../../mocks/DemandeStub";
import DomaineEntity from "../../../../Domain/Data/API/Entity/DomaineEntity";
import domaineStub from "../../../../../mocks/DomaineStub";
import PointAccueilEntity from "../../../../Domain/Data/API/Entity/PointAccueilEntity";
import pointAccueilStub from "../../../../../mocks/PointAccueilStub";
import DisponibilitesEntity from "../../../../Domain/Data/API/Entity/DisponibilitesEntity";
import disponibilitesStub from "../../../../../mocks/DisponibilitesStub";
import RendezVousEntity from "../../../../Domain/Data/API/Entity/RendezVousEntity";
import rendezVousStub from "../../../../../mocks/RendezVousStub";
import {DomaineRepositoryImpl} from "../../../../Domain/Repository/Domaine";
import DomaineServiceImpl from "../../../../Domain/Services/Domaine/DomaineServiceImpl";
import {DemandeRepositoryImpl} from "../../../../Domain/Repository/Demande";
import DemandeServiceImpl from "../../../../Domain/Services/Demande/DemandeServiceImpl";
import CanalRepositoryImpl from "../../../../Domain/Repository/Canal/CanalRepositoryImpl";
import CanalServiceImpl from "../../../../Domain/Services/Canal/CanalServiceImpl";
import {PointAccueilRepositoryImpl} from "../../../../Domain/Repository/PointAccueil";
import PointAccueilServiceImpl from "../../../../Domain/Services/PointAccueil/PointAccueilServiceImpl";
import {RendezVousRepositoryImpl} from "../../../../Domain/Repository/RendezVous";
import DisponibilitesRequestEntity from "../../../../Domain/Data/API/Entity/DisponibilitesRequestEntity";
import RendezVousRequestEntity from "../../../../Domain/Data/API/Entity/RendezVousRequestEntity";
import RendezVousServiceImpl from "../../../../Domain/Services/RendezVous/RendezVousServiceImpl";
import RendezVousController from "../../../../Presentation/pages/RendezVous/RendezVousController";
import {ChoixConnexionServiceImpl} from "../../../../Domain/Services/ChoixConnexion";
import {ChoixConnexionRepositoryImpl} from "../../../../Domain/Repository/ChoixConnexion";
import DefaultChoixConnexion from "../../../../Domain/Data/Enum/ChoixConnexion";
import EligibiliteEntity from "../../../../Domain/Data/API/Entity/EligibiliteEntity";
import {eligibilitesStub} from "../../../../../mocks/EligibilitesStub";
import {AuthentificationRepositoryImpl} from "../../../../Domain/Repository/Authentification";
import RendezVousModelView from "../../../../Presentation/pages/RendezVous/ModelView/RendezVous/RendezVousModelView";
import {AuthentificationServiceImpl} from "../../../../Domain/Services/Authentification";
import AuthentificationEntity from "../../../../Domain/Data/API/Entity/AuthentificationEntity";
import authentificationStub from "../../../../../mocks/AuthentificationStub";

interface InitDependencies {
    eligibilites: EligibiliteEntity;
    demande: DemandeEntity;
    domaine: DomaineEntity;
    pointAccueil: PointAccueilEntity;
    disponibilites: DisponibilitesEntity;
    rendezVous: RendezVousEntity;
    authentification: AuthentificationEntity;
    estConnecte: boolean;
}

export const defaultDependenciesInitPriseRendezVous: InitDependencies = {
    eligibilites: eligibilitesStub,
    demande: demandeStub,
    domaine: domaineStub,
    pointAccueil: pointAccueilStub,
    disponibilites: disponibilitesStub,
    rendezVous: rendezVousStub,
    authentification: authentificationStub,
    estConnecte: false,
};

export function init(dependencies = defaultDependenciesInitPriseRendezVous) {

    const domaineRepository = new DomaineRepositoryImpl({
        async getDomaines(): Promise<DomaineEntity> {
            return dependencies.domaine;
        }
    });
    const domaineService = new DomaineServiceImpl(domaineRepository);

    const demandeRepository = new DemandeRepositoryImpl({
        async getDemandes(): Promise<DemandeEntity> {
            return dependencies.demande;
        }
    });
    const demandeService = new DemandeServiceImpl(demandeRepository);

    const canalRepository = new CanalRepositoryImpl({
        async getEligibilites(): Promise<EligibiliteEntity> {
            return dependencies.eligibilites;
        }
    });
    const canalService = new CanalServiceImpl(canalRepository);

    const choixConnexionRepository = new ChoixConnexionRepositoryImpl({
        defaultChoixConnexion: DefaultChoixConnexion
    });
    const choixConnexionService = new ChoixConnexionServiceImpl(choixConnexionRepository);

    const pointAccueilRepository = new PointAccueilRepositoryImpl({
        async getPointAccueil(cdBuro: string): Promise<PointAccueilEntity> {
            return dependencies.pointAccueil;
        }
    });
    const pointAccueilService = new PointAccueilServiceImpl(pointAccueilRepository);

    const rendezVousRepository = new RendezVousRepositoryImpl({
        async getDisponibilites(request: DisponibilitesRequestEntity): Promise<DisponibilitesEntity> {
            return dependencies.disponibilites;
        },
        async creerRendezVous(request: RendezVousRequestEntity): Promise<void> {
            return Promise.resolve();
        }
    });
    const rendezVousService = new RendezVousServiceImpl(rendezVousRepository);

    const authentificationRepository = new AuthentificationRepositoryImpl({
        estConnecte() {
            return dependencies.estConnecte;
        },
        async initialiseConnexion(urlRedirection: string, uuid: string): Promise<void> {
            return Promise.resolve();
        },
        async sauvegardeDonneesUtilisateur(state: RendezVousModelView): Promise<string> {
            return "uuidSauvegardeDonneesUtilisateur";
        }
    });

    const authentificationService = new AuthentificationServiceImpl(authentificationRepository);

    return new RendezVousController({
        demandeService,
        domaineService,
        canalService,
        pointAccueilService,
        rendezVousService,
        choixConnexionService,
        authentificationService
    });
}
