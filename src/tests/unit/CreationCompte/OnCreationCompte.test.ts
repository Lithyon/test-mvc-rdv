import {defaultDependenciesInitAuthentification, init} from "./common/Init";
import {BooleanChoiceModelView} from "../../../Presentation/commons/ModelView/BooleanChoice/BooleanChoiceModelView";
import {BooleanChoiceCode} from "../../../Domain/Data/Enum/BooleanChoice";
import {CiviliteModelView} from "../../../Presentation/pages/Authentification/ModelView/Civilite/CiviliteModelView";
import {CiviliteCode} from "../../../Domain/Data/Enum/DefaultCivilite";
import {CommuneModelView} from "../../../Presentation/pages/Authentification/ModelView/Commune/CommuneModelView";
import {subYears} from "date-fns";
import {ProfessionModelView} from "../../../Presentation/pages/Authentification/ModelView/Profession/ProfessionModelView";
import {
    SituationFamilialeModelView
} from "../../../Presentation/pages/Authentification/ModelView/SituationFamiliale/SituationFamilialeModelView";

describe("Creation Compte", function () {
    it("doit vérifier qu'il n'y a pas d'erreur de saisie de formulaire", function (done) {
        const controller = init();
        const dateNaissance = new Date(1990, 1, 1);

        controller.onCiviliteSelected({code: CiviliteCode.MONSIEUR, libelle: "Monsieur"} as CiviliteModelView);
        controller.onChangeNom("Bobby");
        controller.onChangePrenom("Bobby");
        controller.onChangeNumeroTelephone("0102030405");
        controller.onChangeEmail("jesuisunrobot@macif.fr");
        controller.onChangeDateNaissance(dateNaissance);
        controller.onChangeSituationFamiliale({libelle: "Célibataire", code: "C"} as SituationFamilialeModelView);
        controller.onChangeProfession({libelle: "Apprenti", code: "XA"} as ProfessionModelView);
        controller.onInformationsCommercialesEmailSelected({code: BooleanChoiceCode.OUI, libelle: "Oui"} as BooleanChoiceModelView);
        controller.onInformationsCommercialesTelephoneSelected({code: BooleanChoiceCode.OUI, libelle: "Oui"} as BooleanChoiceModelView);
        controller.onInformationsCommercialesSmsSelected({code: BooleanChoiceCode.OUI, libelle: "Oui"} as BooleanChoiceModelView);
        controller.onCommuneSelected({
            nom: "nom_commune",
            codePostal: "cp_commune",
            lieuDit: false,
            nomAcheminement: "",
            ancienNom: ""
        } as CommuneModelView);

        controller.subscribeStateChanged(() => {
            expect(controller.formHasError()).toBeFalsy();
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
                    expect(actual.formError.noSocietaireParrain).toBe(expected);
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
            expect(actual.formError.civilite).toBe(expected);
            done();
        });

        controller.onCreationCompte();
    });

    it("doit vérifier que le nom n'est pas renseigné", function (done) {
        const expected = "Veuillez renseigner votre nom";

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.formError.nom).toBe(expected);
            done();
        });

        controller.onCreationCompte();
    });

    it("doit vérifier que le nom contient des caractères spéciaux", function (done) {
        const expected = "Veuillez saisir en premier une lettre alphabétique, les chiffres et caractères spéciaux ne sont pas autorisés";

        const controller = init();

        controller.onChangeNom("*/*/");

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.formError.nom).toBe(expected);
            done();
        });

        controller.onCreationCompte();
    });

    it("doit vérifier que le prénom n'est pas renseigné", function (done) {
        const expected = "Veuillez renseigner votre prénom";

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.formError.prenom).toBe(expected);
            done();
        });

        controller.onCreationCompte();
    });

    it("doit vérifier que le prénom contient des caractères spéciaux", function (done) {
        const expected = "Veuillez saisir en premier une lettre alphabétique, les chiffres et caractères spéciaux ne sont pas autorisés";

        const controller = init();

        controller.onChangePrenom("*/*/");

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.formError.prenom).toBe(expected);
            done();
        });

        controller.onCreationCompte();
    });

    it("doit vérifier que le numéro de téléphone n'est pas sélectionnée", function (done) {
        const expected = "Veuillez renseigner votre numéro de téléphone";

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.formError.numeroTelephone).toBe(expected);
            done();
        });

        controller.onCreationCompte();
    });

    it("doit vérifier que le numéro de téléphone est mal renseigné", function (done) {
        const expected = "Le numéro de téléphone renseigné est incorrect";

        const controller = init();
        controller.onChangeNumeroTelephone("o102030405");
        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.formError.numeroTelephone).toBe(expected);
            done();
        });

        controller.onCreationCompte();
    });

    it("doit vérifier que l'adresse e-mail n'est pas renseignée", function (done) {
        const expected = "Veuillez renseigner votre adresse e-mail";

        const controller = init();
        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.formError.email).toBe(expected);
            done();
        });

        controller.onCreationCompte();
    });

    it("doit vérifier que l'adresse e-mail est mal renseignée", function (done) {
        const expected = "L'adresse e-mail est invalide";

        const controller = init();
        controller.onChangeEmail("dfdfdfdsfs@gtgt");
        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.formError.email).toBe(expected);
            done();
        });

        controller.onCreationCompte();
    });

    it("doit vérifier que la date de naissance n'est pas renseignée", function (done) {
        const expected = "La date saisie est incorrecte (JJ/MM/AAAA)";

        const controller = init();
        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.formError.dateNaissance).toBe(expected);
            done();
        });

        controller.onCreationCompte();
    });

    it("doit vérifier que la date de naissance est mal renseignée", function (done) {
        const date18ans = subYears(new Date(), 18);
        const expected = "La date doit être comprise entre 01/01/1900 et " + date18ans.toLocaleDateString();
        const dateNaissance = new Date();

        const controller = init();
        controller.onChangeDateNaissance(dateNaissance)
        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.formError.dateNaissance).toBe(expected);
            done();
        });

        controller.onCreationCompte();
    });

    it("doit vérifier que la situation familiale n'est pas renseignée", function (done) {
        const expected = "Veuillez renseigner votre situation familiale";

        const controller = init();
        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.formError.situationFamiliale).toBe(expected);
            done();
        });

        controller.onCreationCompte();
    });

    it("doit vérifier que la profession n'est pas renseignée", function (done) {
        const expected = "Veuillez renseigner votre profession";

        const controller = init();
        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.formError.profession).toBe(expected);
            done();
        });

        controller.onCreationCompte();
    });

    it("doit vérifier que l'information commerciale par email n'est pas sélectionnée", function (done) {
        const expected = "Veuillez préciser si vous souhaitez recevoir des informations commerciales des entités du groupe MACIF par e-mail";

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.formError.informationsCommercialesEmail).toBe(expected);
            done();
        });

        controller.onCreationCompte();
    });

    it("doit vérifier que l'information commerciale par SMS n'est pas sélectionnée", function (done) {
        const expected = "Veuillez préciser si vous souhaitez recevoir des informations commerciales des entités du groupe MACIF par SMS";

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.formError.informationsCommercialesSms).toBe(expected);
            done();
        });

        controller.onCreationCompte();
    });

    it("doit vérifier que l'information commerciale par message vocal n'est pas sélectionnée", function (done) {
        const expected = "Veuillez préciser si vous souhaitez recevoir des informations commerciales des entités du groupe MACIF par message vocal";

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.formError.informationsCommercialesTelephone).toBe(expected);
            done();
        });

        controller.onCreationCompte();
    });

    it("doit informer que la commune n'est pas renseignée", function (done) {
        const expected = "Veuillez renseigner le code postal ou la commune";

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.formError.commune).toBe(expected);
            done();
        });

        controller.onCreationCompte();
    });

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

    it("doit afficher la modale de compte déjà existant", function (done) {
        const expected = true;

        const controller = init({
            ...defaultDependenciesInitAuthentification,
            erreurCompteDejaExistant: true
        });
        const dateNaissance = new Date(1990, 1, 1);

        controller.onCiviliteSelected({code: CiviliteCode.MONSIEUR, libelle: "Monsieur"} as CiviliteModelView);
        controller.onChangeNom("Bobby");
        controller.onChangePrenom("Bobby");
        controller.onChangeNumeroTelephone("0102030405");
        controller.onChangeEmail("jesuisunrobot@macif.fr");
        controller.onChangeDateNaissance(dateNaissance);
        controller.onChangeSituationFamiliale({libelle: "Célibataire", code: "C"} as SituationFamilialeModelView);
        controller.onChangeProfession({libelle: "Apprenti", code: "XA"} as ProfessionModelView);
        controller.onInformationsCommercialesEmailSelected({code: BooleanChoiceCode.OUI, libelle: "Oui"} as BooleanChoiceModelView);
        controller.onInformationsCommercialesTelephoneSelected({code: BooleanChoiceCode.OUI, libelle: "Oui"} as BooleanChoiceModelView);
        controller.onInformationsCommercialesSmsSelected({code: BooleanChoiceCode.OUI, libelle: "Oui"} as BooleanChoiceModelView);
        controller.onCommuneSelected({
            nom: "nom_commune",
            codePostal: "cp_commune",
            lieuDit: false,
            nomAcheminement: "",
            ancienNom: ""
        } as CommuneModelView);

        controller.hasErrorDejaUnCompteObserver.subscribeHasError(() => {
            controller.hasErrorDejaUnCompteObserver.subscribeHasError((errorEvent) => {
                expect(errorEvent.hasError).toBe(expected);
                done();
            })
        })
        controller.onCreationCompte();
    });

    it("doit afficher la modale de confirmation de création de prospect", function (done) {
        const expected = true;

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state.afficherModalModificationEmail;
            expect(actual).toBe(expected);
            done();
        });

        controller.onAfficherModaleModificationEmail(true);
    });
});

