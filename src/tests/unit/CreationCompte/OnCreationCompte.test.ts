import {init} from "./common/Init";
import {BooleanChoiceModelView} from "../../../Presentation/commons/ModelView/BooleanChoice/BooleanChoiceModelView";
import {BooleanChoiceCode} from "../../../Domain/Data/Enum/BooleanChoice";
import {CiviliteModelView} from "../../../Presentation/pages/Authentification/ModelView/Civilite/CiviliteModelView";
import {CiviliteCode} from "../../../Domain/Data/Enum/DefaultCivilite";

describe("Creation Compte", function () {
    it("doit vérifier qu'il n'y a pas d'erreur de saisie de formulaire", function (done) {
        const expected = {};
        const controller = init();
        controller.onCiviliteSelected({code: CiviliteCode.MONSIEUR, libelle: "Monsieur"} as CiviliteModelView);
        controller.onChangeNom("Bobby");

        controller.onInformationsCommercialesEmailSelected({
            code: BooleanChoiceCode.OUI,
            libelle: "Oui"
        } as BooleanChoiceModelView);

        controller.onInformationsCommercialesTelephoneSelected({
            code: BooleanChoiceCode.OUI,
            libelle: "Oui"
        } as BooleanChoiceModelView);

        controller.onInformationsCommercialesSmsSelected({
            code: BooleanChoiceCode.OUI,
            libelle: "Oui"
        } as BooleanChoiceModelView);

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.formError.errors).toStrictEqual(expected);
            done();
        });
        controller.onCreationCompte();

    });

    it("doit vérifier que le numéro sociétaire est en erreur à cause des caractères spéciaux", function (done) {
        const expected = "Le numéro de sociétaire ne doit pas contenir de caractères spéciaux";

        const controller = init();

        controller.subscribeStateChanged(() => {
            controller.subscribeStateChanged(() => {
                controller.subscribeStateChanged(() => {
                    const actual = controller.state;
                    expect(actual.formError.errors.noSocietaireParrain).toBe(expected);
                    done();
                });
                controller.onCreationCompte();
            });
            controller.onChangeParrainageNumeroSocietaire("*ù*ù");
        });

        controller.onParrainageChoixSelected({code: BooleanChoiceCode.OUI, libelle: "Oui"} as BooleanChoiceModelView);
    });

    it("doit vérifier que la civilité n'est pas sélectionnée", function (done) {
        const expected = "Veuillez préciser votre civilité";

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.formError.errors.civilite).toBe(expected);
            done();
        });

        controller.onCreationCompte();
    });

    it("doit vérifier que le nom n'est pas renseigné", function (done) {
        const expected = "Veuillez renseigner votre nom";

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.formError.errors.nom).toBe(expected);
            done();
        });

        controller.onCreationCompte();
    });

    it("doit vérifier que l'information commerciale par email n'est pas sélectionnée", function (done) {
        const expected = "Veuillez préciser si vous souhaitez recevoir des informations commerciales des entités du groupe MACIF par e-mail";

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.formError.errors.informationsCommercialesEmail).toBe(expected);
            done();
        });

        controller.onCreationCompte();
    });

    it("doit vérifier que l'information commerciale par SMS n'est pas sélectionnée", function (done) {
        const expected = "Veuillez préciser si vous souhaitez recevoir des informations commerciales des entités du groupe MACIF par SMS";

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.formError.errors.informationsCommercialesSms).toBe(expected);
            done();
        });

        controller.onCreationCompte();
    });

    it("doit vérifier que l'information commerciale par message vocal n'est pas sélectionnée", function (done) {
        const expected = "Veuillez préciser si vous souhaitez recevoir des informations commerciales des entités du groupe MACIF par message vocal";

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.formError.errors.informationsCommercialesTelephone).toBe(expected);
            done();
        });

        controller.onCreationCompte();
    });
});

