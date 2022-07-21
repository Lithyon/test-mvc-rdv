import {init} from "./common/Init";

describe("Creation de compte - renseignement du prénom", function () {
    it("doit récupérer le prénom saisie par l'utilisateur", function (done) {
        const expected = "Bobby";

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.creationCompte.prenom).toBe(expected);
            done();
        });

        controller.onChangePrenom(expected);
    });
});