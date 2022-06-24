import {init} from "./common/Init";

describe("Validation du formulaire", function () {
    it("doit vérifier qu'il n'y a pas d'erreur de saisie de formulaire", function (done) {
        const expected: {[key: string]: string} = {};

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.errors).toStrictEqual(expected);
            done();
        });

        controller.onValidationFormulaire();
    });

    it("doit vérifier que le numéro sociétaire est en erreur", function (done) {
        const expected: {[key: string]: string} = { numeroSocietaire: "Le numéro de sociétaire ne doit pas contenir de caractères spéciaux" };

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.errors).toStrictEqual(expected);
            done();
        });

        controller.onValidationFormulaire();
    });

    it("doit vérifier que la civilité n'est pas sélectionnée", function (done) {
        const expected: {[key: string]: string} = { civilite: "Veuillez préciser votre civilité" };

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.errors).toStrictEqual(expected);
            done();
        });

        controller.onValidationFormulaire();
    });

    it("doit vérifier que l'information commerciale par email n'est pas sélectionnée", function (done) {
        const expected: {[key: string]: string} = { informationsCommercialesEmail: "Veuillez préciser si vous souhaitez recevoir des informations commerciales des entités du groupe MACIF par e-mail" };

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.errors).toStrictEqual(expected);
            done();
        });

        controller.onValidationFormulaire();
    });

    it("doit vérifier que l'information commerciale par SMS n'est pas sélectionnée", function (done) {
        const expected: {[key: string]: string} = { informationsCommercialesSms: "Veuillez préciser si vous souhaitez recevoir des informations commerciales des entités du groupe MACIF par SMS" };

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.errors).toStrictEqual(expected);
            done();
        });

        controller.onValidationFormulaire();
    });

    it("doit vérifier que l'information commerciale par message vocal n'est pas sélectionnée", function (done) {
        const expected: {[key: string]: string} = { informationsCommercialesTelephone: "Veuillez préciser si vous souhaitez recevoir des informations commerciales des entités du groupe MACIF message vocal" };

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.errors).toStrictEqual(expected);
            done();
        });
        controller.onValidationFormulaire();
    });
});

