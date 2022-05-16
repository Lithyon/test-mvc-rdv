import {init} from "./common/Init";
import rendezVousRequestStub from "../../../../mocks/RendezVousRequestStub";

describe('Prise de rendez vous - OnPrecisionSelected', function () {

    it("doit récupérer le message complémentaire que saisie l'utilisateur", function (done) {
        const expected = rendezVousRequestStub.precision;

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;

            expect(actual.rendezVous.precision).toBe(expected);
            done();
        });

        controller.onPrecisionChanged(expected);
    });
});
