import RendezVousController from "../../../src/Presentation/views/RendezVous/RendezVousController";
import DemandeServiceImpl from "../../../src/Domain/Services/Impl/DemandeServiceImpl";
import {DemandeRepositoryImpl} from "../../../src/Domain/Repository/Impl/DemandeRepositoryImpl";
import DemandeEntity from "../../../src/Domain/Repository/Data/API/Entity/DemandeEntity";

describe('Prise de rendez vous', function () {
    it("Doit selectionner un rendez vous quand disponibilité", (done) => {
        const expected =  {
            code: "suarietras",
            libelle: "uasreaéut"
        };
        init(expected);

        controller.subscribeStateChanged(() => {
            const state = controller.state;

            expect(state.demandes[0]).toBe(expected);
            done();
        });
    });
});

function init(expected:DemandeEntity) {

    const demandeRepository = new DemandeRepositoryImpl({
        getDemandes: async () => {
            return [
                expected
            ];
        }
    });
    const demandeService = new DemandeServiceImpl(demandeRepository);
    const controller = new RendezVousController({
        demandeService: demandeService
    });

    controller.onLoad();

    return controller;
}