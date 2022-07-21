import {init} from "./common/Init";

describe("Creation de compte - renseignement du nom", function () {
    it("doit récupérer le nom saisie par l'utilisateur", function (done) {
        const expected = "Bobby";

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.creationCompte.nom).toBe(expected);
            done();
        });

        controller.onChangeNom(expected);
    });
});