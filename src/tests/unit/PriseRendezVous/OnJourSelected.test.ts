import {init} from "./common/Init";
import rendezVousRequestStub from "../../../../mocks/RendezVousRequestStub";

describe('Prise de rendez vous - OnJourSelected', function () {

    it("doit renseigner le jour sélectionné pour la prise de rendez vous", function (done) {
        const expected = rendezVousRequestStub.jour;

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.rendezVous.jour).toBe(expected);

            done();
        });

        controller.onJourSelected(expected);
    });

});
