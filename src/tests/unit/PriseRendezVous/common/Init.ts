import DemandeEntity from "../../../../Domain/Repository/Data/API/Entity/DemandeEntity";
import demandeStub from "../../../../../mocks/DemandeStub";
import DomaineEntity from "../../../../Domain/Repository/Data/API/Entity/DomaineEntity";
import domaineStub from "../../../../../mocks/DomaineStub";
import PointAccueilEntity from "../../../../Domain/Repository/Data/API/Entity/PointAccueilEntity";
import pointAccueilStub from "../../../../../mocks/PointAccueilStub";
import DisponibilitesEntity from "../../../../Domain/Repository/Data/API/Entity/DisponibilitesEntity";
import disponibilitesStub from "../../../../../mocks/DisponibilitesStub";
import RendezVousEntity from "../../../../Domain/Repository/Data/API/Entity/RendezVousEntity";
import rendezVousStub from "../../../../../mocks/RendezVousStub";
import {DomaineRepositoryImpl} from "../../../../Domain/Repository/Impl/DomaineRepositoryImpl";
import DomaineServiceImpl from "../../../../Domain/Services/Impl/DomaineServiceImpl";
import {DemandeRepositoryImpl} from "../../../../Domain/Repository/Impl/DemandeRepositoryImpl";
import DemandeServiceImpl from "../../../../Domain/Services/Impl/DemandeServiceImpl";
import CanalRepositoryImpl from "../../../../Domain/Repository/Impl/CanalRepositoryImpl";
import DefaultCanal from "../../../../Domain/Repository/Data/Enum/Canal";
import CanalServiceImpl from "../../../../Domain/Services/Impl/CanalServiceImpl";
import {PointAccueilRepositoryImpl} from "../../../../Domain/Repository/Impl/PointAccueilRepositoryImpl";
import PointAccueilServiceImpl from "../../../../Domain/Services/Impl/PointAccueilServiceImpl";
import {RendezVousRepositoryImpl} from "../../../../Domain/Repository/Impl/RendezVousRepositoryImpl";
import DisponibilitesRequestEntity from "../../../../Domain/Repository/Data/API/Entity/DisponibilitesRequestEntity";
import RendezVousRequestEntity from "../../../../Domain/Repository/Data/API/Entity/RendezVousRequestEntity";
import RendezVousServiceImpl from "../../../../Domain/Services/Impl/RendezVousServiceImpl";
import RendezVousController from "../../../../Presentation/views/RendezVous/RendezVousController";

export function init(
    demande: DemandeEntity = demandeStub,
    domaine: DomaineEntity = domaineStub,
    pointAccueil: PointAccueilEntity = pointAccueilStub,
    disponibilites: DisponibilitesEntity = disponibilitesStub,
    rendezVous: RendezVousEntity = rendezVousStub) {

    const domaineRepository = new DomaineRepositoryImpl({
        async getDomaines(): Promise<DomaineEntity> {
            return domaine;
        }
    })
    const domaineService = new DomaineServiceImpl(domaineRepository);

    const demandeRepository = new DemandeRepositoryImpl({
        async getDemandes(): Promise<DemandeEntity> {
            return demande;
        }
    });
    const demandeService = new DemandeServiceImpl(demandeRepository);

    const canalRepository = new CanalRepositoryImpl({
        defaultCanalDataSource: DefaultCanal
    });
    const canalService = new CanalServiceImpl(canalRepository);

    const pointAccueilRepository = new PointAccueilRepositoryImpl({
        async getPointAccueil(cdBuro: string): Promise<PointAccueilEntity> {
            return pointAccueil;
        }
    })
    const pointAccueilService = new PointAccueilServiceImpl(pointAccueilRepository);

    const rendezVousRepository = new RendezVousRepositoryImpl({
        async getDisponibilites(request: DisponibilitesRequestEntity): Promise<DisponibilitesEntity> {
            return disponibilites;
        },
        async creerRendezVous(request: RendezVousRequestEntity): Promise<RendezVousEntity> {
            return rendezVous;
        }
    })
    const rendezVousService = new RendezVousServiceImpl(rendezVousRepository)

    const controller = new RendezVousController({
        demandeService,
        domaineService,
        canalService,
        pointAccueilService,
        rendezVousService,
    });

    return controller;
}