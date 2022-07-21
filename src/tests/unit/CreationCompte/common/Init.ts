import AuthentificationController from "../../../../Presentation/pages/Authentification/AuthentificationController";
import {CreationCompteServiceImpl} from "../../../../Domain/Services/CreationCompte";
import {CreationCompteRepositoryImpl} from "../../../../Domain/Repository/CreationCompte";
import CreationCompteRequestEntity from "../../../../Domain/Data/API/Entity/CreationCompteRequestEntity";
import CreationCompteEntity from "../../../../Domain/Data/API/Entity/CreationCompteEntity";
import {creationCompteStub} from "../../../../../mocks/CreationCompteStub";
import {RendezVousRepositoryImpl} from "../../../../Domain/Repository/RendezVous";
import DisponibilitesRequestEntity from "../../../../Domain/Data/API/Entity/DisponibilitesRequestEntity";
import DisponibilitesEntity from "../../../../Domain/Data/API/Entity/DisponibilitesEntity";
import RendezVousRequestEntity from "../../../../Domain/Data/API/Entity/RendezVousRequestEntity";
import RendezVousEntity from "../../../../Domain/Data/API/Entity/RendezVousEntity";
import disponibilitesStub from "../../../../../mocks/DisponibilitesStub";
import rendezVousStub from "../../../../../mocks/RendezVousStub";
import {CommunesRepositoryImpl} from "../../../../Domain/Repository/Communes";
import CommunesRequestEntity from "../../../../Domain/Data/API/Entity/CommunesRequestEntity";
import CommunesEntity from "../../../../Domain/Data/API/Entity/CommunesEntity";
import communesStub from "../../../../../mocks/CommunesStub";

export function init(
    communes: CommunesEntity = communesStub,
    disponibilites: DisponibilitesEntity = disponibilitesStub,
    rendezVous: RendezVousEntity = rendezVousStub,
    creationCompte: CreationCompteEntity = creationCompteStub
) {
    const creationCompteRepository = new CreationCompteRepositoryImpl({
        async creationCompte(_request: CreationCompteRequestEntity): Promise<CreationCompteEntity> {
            return creationCompte;
        }
    });
    const rendezVousRepository = new RendezVousRepositoryImpl({
        async getDisponibilites(_request: DisponibilitesRequestEntity): Promise<DisponibilitesEntity> {
            return disponibilites;
        },
        async creerRendezVous(_request: RendezVousRequestEntity): Promise<RendezVousEntity> {
            return rendezVous;
        }
    })
    const communesRepository = new CommunesRepositoryImpl({
        async getCommunes(_request: CommunesRequestEntity): Promise<CommunesEntity> {
            return communes;
        }
    });
    const creationCompteService = new CreationCompteServiceImpl(creationCompteRepository, rendezVousRepository, communesRepository);

    return new AuthentificationController({creationCompteService});
}