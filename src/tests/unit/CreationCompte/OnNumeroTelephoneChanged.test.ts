import {init} from "./common/Init";

describe("Creation de compte - renseignement du numero de téléphone", function () {
    it("doit récupérer le numéro de téléphone saisie par l'utilisateur", function (done) {
        const expected = "0102030405";

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.creationCompte.numeroTelephone).toBe(expected);
            done();
        });

        controller.onChangeNumeroTelephone(expected);
    });
});