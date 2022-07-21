import {init} from "./common/Init";

describe("Creation de compte - renseignement de la date de naissance", function () {
    it("doit récupérer la date de naissance saisie par l'utilisateur", function (done) {
        const expected = new Date(1990,1,1);

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.creationCompte.dateNaissance).toBe(expected);
            done();
        });

        controller.onChangeDateNaissance(expected);
    });
});