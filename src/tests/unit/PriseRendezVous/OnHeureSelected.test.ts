import {init} from "./common/Init";
import rendezVousRequestStub from "../../../../mocks/RendezVousRequestStub";

describe('Prise de rendez vous - OnHeureSelected', function () {

    it("doit renseigner l'heure sélectionné pour la prise de rendez vous", function (done) {
        const expected = rendezVousRequestStub.heure;

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.rendezVous.heure).toBe(expected);

            done();
        });

        controller.onHeureSelected(expected);
    });

});
