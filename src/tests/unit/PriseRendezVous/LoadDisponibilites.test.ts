import {init} from "./common/Init";
import disponibilitesStub from "../../../../mocks/DisponibilitesStub";

describe('Prise de rendez vous - LoadDisponibilites', function () {

    it("doit récupérer les jours disponibles lorsque le canal est sélectionné", function (done) {
        const expected = disponibilitesStub.disponibilites[0].jour;

        const controller = init();

        controller.subscribeStateChanged(() => {

            const actual = controller.state;
            expect(actual.disponibilites.disponibilites[0].jour).toStrictEqual(expected);

            done();
        });

        controller.loadDisponibilites();
    });

    it("doit récupérer les codes des disponibilités matin lorsque le canal est sélectionné", function (done) {
        const expected = disponibilitesStub.disponibilites[0].disponibilitesMatin[0].valeur;

        const controller = init();

        controller.subscribeStateChanged(() => {

            const actual = controller.state;
            expect(actual.disponibilites.disponibilites[0].disponibilitesMatin[0].code).toBe(expected.toString());

            done();
        });

        controller.loadDisponibilites();
    });

    it("doit récupérer les libelles des disponibilités matin lorsque le canal est sélectionné", function (done) {
        const expected = disponibilitesStub.disponibilites[0].disponibilitesMatin[0].libelle;

        const controller = init();

        controller.subscribeStateChanged(() => {

            const actual = controller.state;
            expect(actual.disponibilites.disponibilites[0].disponibilitesMatin[0].libelle).toBe(expected);

            done();
        });

        controller.loadDisponibilites();
    });

    it("doit récupérer les codes des disponibilités après midi lorsque le canal est sélectionné", function (done) {
        const expected = disponibilitesStub.disponibilites[0].disponibilitesApresMidi[0].valeur;

        const controller = init();

        controller.subscribeStateChanged(() => {

            const actual = controller.state;
            expect(actual.disponibilites.disponibilites[0].disponibilitesApresMidi[0].code).toBe(expected.toString());

            done();
        });

        controller.loadDisponibilites();
    });

    it("doit récupérer les libelles des disponibilités après midi lorsque le canal est sélectionné", function (done) {
        const expected = disponibilitesStub.disponibilites[0].disponibilitesApresMidi[0].libelle;

        const controller = init();

        controller.subscribeStateChanged(() => {

            const actual = controller.state;
            expect(actual.disponibilites.disponibilites[0].disponibilitesApresMidi[0].libelle).toBe(expected);

            done();
        });

        controller.loadDisponibilites();
    });
});
