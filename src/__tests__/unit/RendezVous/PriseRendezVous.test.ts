import RendezVousController from "../../../Presentation/views/RendezVous/RendezVousController";
import DemandeServiceImpl from "../../../Domain/Services/Impl/DemandeServiceImpl";
import {DemandeRepositoryImpl} from "../../../Domain/Repository/Impl/DemandeRepositoryImpl";
import DemandeEntity from "../../../Domain/Repository/Data/API/Entity/DemandeEntity";
import DomaineServiceImpl from "../../../Domain/Services/Impl/DomaineServiceImpl";
import {DomaineRepositoryImpl} from "../../../Domain/Repository/Impl/DomaineRepositoryImpl";
import DomaineEntity from "../../../Domain/Repository/Data/API/Entity/DomaineEntity";
import CanalServiceImpl from "../../../Domain/Services/Impl/CanalServiceImpl";
import CanalRepositoryImpl from "../../../Domain/Repository/Impl/CanalRepositoryImpl";
import DefaultCanal from "../../../Domain/Repository/Data/Enum/Canal";
import PointAccueilServiceImpl from "../../../Domain/Services/Impl/PointAccueilServiceImpl";
import {PointAccueilRepositoryImpl} from "../../../Domain/Repository/Impl/PointAccueilRepositoryImpl";
import PointAccueilEntity from "../../../Domain/Repository/Data/API/Entity/PointAccueilEntity";
import RendezVousServiceImpl from "../../../Domain/Services/Impl/RendezVousServiceImpl";
import {RendezVousRepositoryImpl} from "../../../Domain/Repository/Impl/RendezVousRepositoryImpl";
import DisponibilitesRequestEntity from "../../../Domain/Repository/Data/API/Entity/DisponibilitesRequestEntity";
import DisponibilitesEntity from "../../../Domain/Repository/Data/API/Entity/DisponibilitesEntity";
import RendezVousRequestEntity from "../../../Domain/Repository/Data/API/Entity/RendezVousRequestEntity";
import RendezVousEntity from "../../../Domain/Repository/Data/API/Entity/RendezVousEntity";
import domaineMock from "../../../../mocks/DomaineMock";
import demandeMock from "../../../../mocks/DemandeMock";
import pointAccueilMock from "../../../../mocks/PointAccueilMock";
import disponibilitesMock from "../../../../mocks/DisponibilitesMock";
import rendezVousMock from "../../../../mocks/RendezVousMock";

describe('Prise de rendez vous', function () {
    it("doit proposer une disponibilité", (done) => {
        const controller = init(demandeMock, domaineMock, pointAccueilMock, disponibilitesMock, rendezVousMock);

        controller.subscribeStateChanged(() => {
            const state = controller.state;

            expect(state.domaines[0]).toStrictEqual({
                libelle: "ffe",
                code: "01"
            });
            expect(state.pointAccueil).toStrictEqual({
                cdBuro: "7901",
                codePostal: "79000",
                commune: "NIORT",
                horairesOuvertureFermetures: [],
                noVoie: "226",
                nomPointAccueil: "NIORT",
                nomVoie: "DE LA ROCHELLE",
                srcImgPointAccueil: "https://www.macif.fr/files/live/sites/maciffr/files/maciffr/NousContacter/pa_7901.jpg",
                telPointAccueil: "0969394949",
                typeVoie: "Avenue",
                urlPointAccueil: "https://agence.macif.fr/assurance/proxy.asp?agenceid=7901"
            });
            expect(state.rendezVous).toStrictEqual({
                cdBuro: "7901",
                canalSelected: "",
                demandeSelected: "",
                domaineSelected: "",
                estFilleul: false,
                heure: 0,
                jour: 0,
                nmCommu: "NIORT",
                noSocietaireParrain: "",
                noTel: "",
                precision: ""
            })
            done();
        })
    });
});

function init(
    demandeMock: DemandeEntity,
    domaineMock: DomaineEntity,
    pointAccueilMock: PointAccueilEntity,
    disponibilitesMock: DisponibilitesEntity,
    rendezVousMock: RendezVousEntity) {

    const domaineRepository = new DomaineRepositoryImpl({
        async getDomaines(): Promise<DomaineEntity> {
            return domaineMock;
        }
    })
    const domaineService = new DomaineServiceImpl(domaineRepository);

    const demandeRepository = new DemandeRepositoryImpl({
        async getDemandes(): Promise<DemandeEntity> {
            return demandeMock;
        }
    });
    const demandeService = new DemandeServiceImpl(demandeRepository);

    const canalRepository = new CanalRepositoryImpl({
        defaultCanalDataSource: DefaultCanal
    });
    const canalService = new CanalServiceImpl(canalRepository);

    const pointAccueilRepository = new PointAccueilRepositoryImpl({
        async getPointAccueil(cdBuro: string): Promise<PointAccueilEntity> {
            return pointAccueilMock;
        }
    })
    const pointAccueilService = new PointAccueilServiceImpl(pointAccueilRepository);

    const rendezVousRepository = new RendezVousRepositoryImpl({
        async getDisponibilites(request: DisponibilitesRequestEntity): Promise<DisponibilitesEntity> {
            return disponibilitesMock;
        },
        async creerRendezVous(request: RendezVousRequestEntity): Promise<RendezVousEntity> {
            return rendezVousMock;
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

    controller.onLoad();

    return controller;
}