import {init} from "./common/Init";
import rendezVousRequestStub from "../../../../mocks/RendezVousRequestStub";
import demandeStub from "../../../../mocks/DemandeStub";

describe('Prise de rendez vous - OnDomaineSelected', function () {

    it("doit fournir une liste de choix de demandes", (done) => {
        const expected = demandeStub.codes;

        const controller = init();

        controller.onDomaineSelected("01");

        controller.subscribeStateChanged(() => {
            const actual = controller.state;

            expect(actual.demandes.length).toBe(expected.length);
            done();
        });
    });

    it("doit fournir un code quand un choix de domaines est récupéré", (done) => {
        const expected = demandeStub.codes[0].code;

        const controller = init();

        controller.onDomaineSelected("01");

        controller.subscribeStateChanged(() => {
            const actual = controller.state;

            expect(actual.demandes[0].code).toBe(expected);
            done();
        });
    });

    it("doit fournir un libelle quand un choix de domaines est récupéré", (done) => {
        const expected = demandeStub.codes[0].libelle;

        const controller = init();

        controller.onDomaineSelected("01");

        controller.subscribeStateChanged(() => {
            const actual = controller.state;

            expect(actual.demandes[0].libelle).toBe(expected);
            done();
        });
    });

    it("doit renseigner le code domaine sélectionné pour la prise de rendez vous", function (done) {
        const expected = rendezVousRequestStub.cdDomaine;

        const controller = init();

        controller.onDomaineSelected("01");

        controller.subscribeStateChanged(() => {
            const actual = controller.state;

            expect(actual.rendezVous.domaineSelected).toBe(expected);
            done();
        });
    });
});
