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
import CommuneEntity from "../../../../Domain/Data/API/Entity/CommuneEntity";
import {SituationFamilialeServiceImpl} from "../../../../Domain/Services/SituationFamiliale";
import {SituationFamilialeRepositoryImpl} from "../../../../Domain/Repository/SituationFamiliale";
import SituationFamilialeEntity from "../../../../Domain/Data/API/Entity/SituationFamilialeEntity";
import situationFamilialeStub from "../../../../../mocks/ProfessionStub";
import {ProfessionServiceImpl} from "../../../../Domain/Services/Profession";
import {ProfessionRepositoryImpl} from "../../../../Domain/Repository/Profession";
import ProfessionEntity from "../../../../Domain/Data/API/Entity/ProfessionEntity";
import professionStub from "../../../../../mocks/SituationFamilialeStub";
import {ContactRepositoryImpl} from "../../../../Domain/Repository/Contact";
import ContactEntity from "../../../../Domain/Data/API/Entity/ContactEntity";
import {ContactServiceImpl} from "../../../../Domain/Services/Contact";
import contactStub from "../../../../../mocks/ContactStub";
import {RendezVousServiceImpl} from "../../../../Domain/Services/RendezVous";
import {AuthentificationRepositoryImpl} from "../../../../Domain/Repository/Authentification";
import RendezVousModelView from "../../../../Presentation/pages/RendezVous/ModelView/RendezVous/RendezVousModelView";
import IdentiteEntity from "../../../../Domain/Data/API/Entity/IdentiteEntity";
import {IdentiteRepositoryImpl} from "../../../../Domain/Repository/Identite";
import {CodeMessageApplicatif} from "../../../../Domain/Data/Enum/CodeMessageApplicatif";
import AuthentificationEntity from "../../../../Domain/Data/API/Entity/AuthentificationEntity";
import authentificationStub from "../../../../../mocks/AuthentificationStub";
import {AuthentificationServiceImpl} from "../../../../Domain/Services/Authentification";

interface InitDependencies {
    disponibilites: DisponibilitesEntity;
    rendezVous: RendezVousEntity;
    creationCompte: CreationCompteEntity;
    situationFamiliale: SituationFamilialeEntity;
    profession: ProfessionEntity;
    contact: ContactEntity;
    erreurCompteDejaExistant: boolean;
    authentification: AuthentificationEntity;
}

export const defaultDependenciesInitAuthentification: InitDependencies = {
    disponibilites: disponibilitesStub,
    rendezVous: rendezVousStub,
    creationCompte: creationCompteStub,
    situationFamiliale: situationFamilialeStub,
    profession: professionStub,
    contact: contactStub,
    erreurCompteDejaExistant: false,
    authentification: authentificationStub
};

export function init(dependencies = defaultDependenciesInitAuthentification) {
    const creationCompteRepository = new CreationCompteRepositoryImpl({
        async creationCompte(_request: CreationCompteRequestEntity): Promise<CreationCompteEntity> {
            if (dependencies.erreurCompteDejaExistant) {
                throw new Error(CodeMessageApplicatif.IDENTIFIANT_DEJA_EXISTANT);
            }
            return dependencies.creationCompte;
        }
    });

    const communesRepository = new CommunesRepositoryImpl({
        async getCommunes(_request: CommunesRequestEntity): Promise<Array<CommuneEntity>> {
            return [];
        }
    });

    const identiteRepository = new IdentiteRepositoryImpl({
        async getIdentite(): Promise<IdentiteEntity> {
            return {} as IdentiteEntity;
        }
    });

    const rendezVousRepository = new RendezVousRepositoryImpl({
        async getDisponibilites(_request: DisponibilitesRequestEntity): Promise<DisponibilitesEntity> {
            return dependencies.disponibilites;
        },
        async creerRendezVous(_request: RendezVousRequestEntity): Promise<void> {
            return Promise.resolve();
        }
    });
    const rendezVousService = new RendezVousServiceImpl(rendezVousRepository);

    const creationCompteService = new CreationCompteServiceImpl(
        creationCompteRepository,
        rendezVousRepository,
        communesRepository,
        identiteRepository
    );

    const situationFamilialeServiceRepo = new SituationFamilialeRepositoryImpl({
        async getSituationFamiliale(): Promise<SituationFamilialeEntity> {
            return dependencies.situationFamiliale;
        }
    });
    const situationFamilialeService = new SituationFamilialeServiceImpl(situationFamilialeServiceRepo);

    const professionRepo = new ProfessionRepositoryImpl({
        async getProfession(): Promise<ProfessionEntity> {
            return dependencies.profession;
        }
    });
    const professionService = new ProfessionServiceImpl(professionRepo);

    const contactRepo = new ContactRepositoryImpl({
        async getContact(): Promise<ContactEntity> {
            return dependencies.contact;
        }
    });

    const authentificationRepo = new AuthentificationRepositoryImpl({
        estConnecte() {
            return true;
        },
        async initialiseConnexion(urlRedirection: string, uuid: string): Promise<void> {
            return Promise.resolve();
        },
        async sauvegardeDonneesUtilisateur(state: RendezVousModelView): Promise<string> {
            return "uuidSauvegardeDonneesUtilisateur";
        }
    });

    const contactService = new ContactServiceImpl(contactRepo, authentificationRepo);
    const authentificationService = new AuthentificationServiceImpl(authentificationRepo);

    return new AuthentificationController({
        rendezVousService,
        creationCompteService,
        situationFamilialeService,
        professionService,
        contactService,
        authentificationService
    });
}
