import {init} from "./common/Init";
import {ChoixContactModelView} from "../../../Presentation/pages/Authentification/ModelView/PourVousJoindre/ChoixContactModelView";
import {AutreChoixCode} from "../../../Domain/Data/Enum/AutreChoix";

describe("Pour vous joindre - validation du formulaire", function () {
    it("doit vérifier qu'il n'y a pas d'erreur de saisie de formulaire dans le cas d'un email", function (done) {
        const controller = init();

        controller.subscribeStateChanged(() => {
            controller.unsubscribeStateChanged();
            controller.onChoixContactSelected({code: AutreChoixCode.MAIL, libelle: ""} as ChoixContactModelView);
            controller.onEmailPourVousJoindreChanged("toto@gmail.com");

            controller.subscribeStateChanged(() => {
                controller.unsubscribeStateChanged();
                expect(controller.formHasError()).toBeFalsy();
                done();
            });

            controller.onValidationRendezVous();
        });

        controller.onLoad();
    });

    it("doit lever une erreur dans le cas d'un autre choix et que l'email n'est pas renseigné", function (done) {
        const expected = "Veuillez renseigner votre adresse e-mail";

        const controller = init();

        controller.onChoixContactSelected({code: AutreChoixCode.MAIL, libelle: ""} as ChoixContactModelView);

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.formErrorPourVousJoindre.email).toBe(expected);
            done();
        });

        controller.onValidationRendezVous();
    });

    it("doit lever une erreur car l'adresse mail saisie est incorrect", function (done) {
        const expected = "L'adresse e-mail est invalide";

        const controller = init();

        controller.onChoixContactSelected({code: AutreChoixCode.MAIL, libelle: ""} as ChoixContactModelView);
        controller.onEmailPourVousJoindreChanged("greopgjigjerio");

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.formErrorPourVousJoindre.email).toBe(expected);
            done();
        });

        controller.onValidationRendezVous();
    });

    it("doit vérifier qu'il n'y a pas d'erreur de saisie de formulaire dans le cas d'un numéro téléphone", function (done) {
        const controller = init();

        controller.subscribeStateChanged(() => {
            controller.unsubscribeStateChanged();
            controller.onChoixContactSelected({code: AutreChoixCode.TELEPHONE, libelle: ""} as ChoixContactModelView);
            controller.onTelephonePourVousJoindreChanged("0102030405");

            controller.subscribeStateChanged(() => {
                controller.unsubscribeStateChanged();
                expect(controller.formHasError()).toBeFalsy();
                done();
            });

            controller.onValidationRendezVous();
        });

        controller.onLoad();
    });

    it("doit lever une erreur car le numéro de téléphone saisie est incorrect", function (done) {
        const expected = "Le numéro de téléphone renseigné est incorrect";

        const controller = init();

        controller.onChoixContactSelected({code: AutreChoixCode.TELEPHONE, libelle: ""} as ChoixContactModelView);
        controller.onTelephonePourVousJoindreChanged("greopgjigjerio");

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.formErrorPourVousJoindre.numeroTelephone).toBe(expected);
            done();
        });

        controller.onValidationRendezVous();
    });

    it("doit lever une erreur dans le cas d'un autre choix et que le téléphone n'est pas renseigné", function (done) {
        const expected = "Veuillez renseigner votre numéro de téléphone";

        const controller = init();

        controller.onChoixContactSelected({code: AutreChoixCode.TELEPHONE, libelle: ""} as ChoixContactModelView);

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.formErrorPourVousJoindre.numeroTelephone).toBe(expected);
            done();
        });

        controller.onValidationRendezVous();
    });

    it("doit lever une erreur si aucun choix de contact est sélectionné - téléphone", function (done) {
        const expected = "Veuillez sélectionner ou saisir un numéro de téléphone";

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.formErrorPourVousJoindre.choixContact).toBe(expected);
            done();
        });

        controller.onValidationRendezVous();
    });
});

