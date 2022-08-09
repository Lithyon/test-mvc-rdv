import {init} from "./common/Init";

describe("Creation de compte - renseignement de la commune", function () {
    it("doit informer que la commune saisie n'est pas dans les dom tom", function (done) {
        const expected = "La commune doit être en France métropolitaine (département 01 à 95).";

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.formError.commune).toBe(expected);
            done();
        });

        controller.onRechercheCommune("96000");
    });

    it("doit informer que la commune saisie n'est pas reconnue", function (done) {
        const expected = "La commune que vous avez saisie est inconnue. Veuillez à nouveau saisir un code postal ou un nom de commune.";

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.formError.commune).toBe(expected);
            done();
        });

        controller.onRechercheCommune("ma super belle communne");
    });
});
