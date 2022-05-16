import {init} from "./common/Init";
import disponibilitesStub from "../../../../mocks/DisponibilitesStub";

describe('Prise de rendez vous - LoadDisponibilites', function () {

    it("doit récupérer les disponibilités lorsque le canal est sélectionné", function (done) {
        const expected = disponibilitesStub.disponibilites.length;

        const controller = init();

        controller.onDomaineSelected("01");

        controller.subscribeStateChanged(() => {
            controller.unsubscribeStateChanged();
            controller.subscribeStateChanged(() => {
                controller.unsubscribeStateChanged();
                controller.subscribeStateChanged(() => {
                    controller.subscribeStateChanged(() => {
                        const actual = controller.state;

                        expect(actual.disponibilites.disponibilites.length).toBe(expected);
                        done();
                    });
                });
                controller.onCanalSelected("01");
            });
            controller.onDemandeSelected("01");
        });
    });

    it("doit récupérer les codes des disponibilites lorsque le canal est sélectionné", function (done) {
        const expected = disponibilitesStub.disponibilites[0].disponibilitesApresMidi[0].valeur;

        const controller = init();

        controller.loadDisponibilites();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;

            expect(actual.disponibilites.disponibilites[0].disponibilitesApresMidi[0].code).toBe(expected.toString());
            done();
        });
    });

    it("doit récupérer les libelles des disponibilites lorsque le canal est sélectionné", function (done) {
        const expected = disponibilitesStub.disponibilites[0].disponibilitesApresMidi[0].libelle;

        const controller = init();

        controller.loadDisponibilites();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;

            expect(actual.disponibilites.disponibilites[0].disponibilitesApresMidi[0].libelle).toBe(expected);
            done();
        });
    });

});
