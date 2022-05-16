import {init} from "./common/Init";
import rendezVousRequestStub from "../../../../mocks/RendezVousRequestStub";

describe('Prise de rendez vous - OnDomaineSelected', function () {

    it("doit renseigner le code demande sélectionné pour la prise de rendez vous", function (done) {
        const expected = rendezVousRequestStub.cdDemande;

        const controller = init();

        controller.onDomaineSelected("01");

        controller.subscribeStateChanged(() => {
            controller.unsubscribeStateChanged();
            controller.subscribeStateChanged(() => {
                const actual = controller.state;

                expect(actual.rendezVous.demandeSelected).toBe(expected);
                done();
            });
            controller.onDemandeSelected("01");
        });
    });

});
