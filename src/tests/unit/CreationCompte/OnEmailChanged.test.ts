import {init} from "./common/Init";

describe("Creation de compte - renseignement de l'email", function () {
    it("doit récupérer le l'email saisie par l'utilisateur", function (done) {
        const expected = "jesuisunrobot@macif.fr";

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.creationCompte.email).toBe(expected);
            done();
        });

        controller.onChangeEmail(expected);
    });
});