import pointAccueilStub from "../../../../mocks/PointAccueilStub";
import {init} from "./common/Init";
import domaineStub from "../../../../mocks/DomaineStub";
import rendezVousRequestStub from "../../../../mocks/RendezVousRequestStub";

describe('Prise de rendez vous - OnLoad', function () {

    it("doit fournir le bon code d'agence quand le point d'accueil est récupéré", (done) => {
        const expected = pointAccueilStub.cdBuro;

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;

            expect(actual.pointAccueil.cdBuro).toStrictEqual(expected);

            done();
        })

        controller.onLoad();
    });

    it("doit fournir le nom d'agence quand le point d'accueil est récupéré", (done) => {
        const expected = pointAccueilStub.liBuro;

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;

            expect(actual.pointAccueil.nomPointAccueil).toStrictEqual(expected);

            done();
        })

        controller.onLoad();
    });

    it("doit fournir le numéro de téléphone quand le point d'accueil est récupéré", (done) => {
        const expected = pointAccueilStub.noTeleLigne;

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;

            expect(actual.pointAccueil.telPointAccueil).toStrictEqual(expected);

            done();
        })

        controller.onLoad();
    });

    it("doit générer l'url quand le point d'accueil est récupéré", (done) => {
        const expected = `https://agence.macif.fr/assurance/proxy.asp?agenceid=${pointAccueilStub.cdBuro}`;

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;

            expect(actual.pointAccueil.urlPointAccueil).toStrictEqual(expected);

            done();
        })

        controller.onLoad();
    });

    it("doit générer l'url de l'image quand le point d'accueil est récupéré", (done) => {
        const expected = `https://www.macif.fr/files/live/sites/maciffr/files/maciffr/NousContacter/pa_${pointAccueilStub.cdBuro}.jpg`;

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;

            expect(actual.pointAccueil.srcImgPointAccueil).toStrictEqual(expected);

            done();
        })

        controller.onLoad();
    });

    it("doit fournir le code postal quand le point d'accueil est récupéré", (done) => {
        const expected = pointAccueilStub.cdPost;

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;

            expect(actual.pointAccueil.codePostal).toStrictEqual(expected);

            done();
        })

        controller.onLoad();
    });

    it("doit fournir le nom de la commune quand le point d'accueil est récupéré", (done) => {
        const expected = pointAccueilStub.nmCommu;

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;

            expect(actual.pointAccueil.commune).toStrictEqual(expected);

            done();
        })

        controller.onLoad();
    });

    it("doit fournir le nom de la voie quand le point d'accueil est récupéré", (done) => {
        const expected = pointAccueilStub.nmVoie;

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;

            expect(actual.pointAccueil.nomVoie).toStrictEqual(expected);

            done();
        })

        controller.onLoad();
    });

    it("doit fournir le numéro de voie quand le point d'accueil est récupéré", (done) => {
        const expected = pointAccueilStub.noVoie;

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;

            expect(actual.pointAccueil.noVoie).toStrictEqual(expected);

            done();
        })

        controller.onLoad();
    });

    it("doit fournir le type de voie quand le point d'accueil est récupéré", (done) => {
        const expected = pointAccueilStub.liNatuVoie;

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;

            expect(actual.pointAccueil.typeVoie).toStrictEqual(expected);

            done();
        })

        controller.onLoad();
    });

    it("doit fournir les horaires du point d'accueil quand le point d'accueil est récupéré", (done) => {
        const expected = pointAccueilStub.horairesOuvertureFermetures;

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;

            expect(actual.pointAccueil.horairesOuvertureFermetures).toBe(expected);

            done();
        })

        controller.onLoad();
    });

    it("doit fournir une liste de choix de domaines", (done) => {
        const expected = domaineStub.codes;

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;

            expect(actual.domaines.length).toBe(expected.length);

            done();
        });

        controller.onLoad();
    });

    it("doit fournir un code quand un choix de domaines est récupéré", (done) => {
        const expected = domaineStub.codes[0].code;

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;

            expect(actual.domaines[0].code).toBe(expected);

            done();
        });

        controller.onLoad();
    });

    it("doit fournir un libelle quand un choix de domaines est récupéré", (done) => {
        const expected = domaineStub.codes[0].libelle;

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;

            expect(actual.domaines[0].libelle).toBe(expected);

            done();
        });

        controller.onLoad();
    });

    it("doit renseigner le code bureau pour la prise de rendez vous", function (done) {
        const expected = rendezVousRequestStub.cdBuro;

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;

            expect(actual.rendezVous.cdBuro).toBe(expected);

            done();
        });

        controller.onLoad();
    });

    it("doit renseigner le nom de la commune de l'agence pour la prise de rendez vous", function (done) {
        const expected = rendezVousRequestStub.nmCommu;

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;

            expect(actual.rendezVous.nmCommu).toBe(expected);

            done();
        });

        controller.onLoad();
    });

});
