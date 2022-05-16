import pointAccueilStub from "../../../../mocks/PointAccueilStub";
import {init} from "./common/Init";

describe('Prise de rendez vous - OnLoad - PointAccueil', function () {

    it("doit fournir le bon code d'agence quand le point d'accueil est récupéré", (done) => {
        const expected = pointAccueilStub.cdBuro;

        const controller = init();

        controller.onLoad();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;

            expect(actual.pointAccueil.cdBuro).toStrictEqual(expected);
            done();
        })
    });

    it("doit fournir le nom d'agence quand le point d'accueil est récupéré", (done) => {
        const expected = pointAccueilStub.liBuro;

        const controller = init();

        controller.onLoad();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;

            expect(actual.pointAccueil.nomPointAccueil).toStrictEqual(expected);
            done();
        })
    });

    it("doit fournir le numéro de téléphone quand le point d'accueil est récupéré", (done) => {
        const expected = pointAccueilStub.noTeleLigne;

        const controller = init();

        controller.onLoad();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;

            expect(actual.pointAccueil.telPointAccueil).toStrictEqual(expected);
            done();
        })
    });

    it("doit générer l'url quand le point d'accueil est récupéré", (done) => {
        const expected = `https://agence.macif.fr/assurance/proxy.asp?agenceid=${pointAccueilStub.cdBuro}`;

        const controller = init();

        controller.onLoad();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;

            expect(actual.pointAccueil.urlPointAccueil).toStrictEqual(expected);
            done();
        })
    });

    it("doit générer l'url de l'image quand le point d'accueil est récupéré", (done) => {
        const expected = `https://www.macif.fr/files/live/sites/maciffr/files/maciffr/NousContacter/pa_${pointAccueilStub.cdBuro}.jpg`;

        const controller = init();

        controller.onLoad();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;

            expect(actual.pointAccueil.srcImgPointAccueil).toStrictEqual(expected);
            done();
        })
    });

    it("doit fournir le code postal quand le point d'accueil est récupéré", (done) => {
        const expected = pointAccueilStub.cdPost;

        const controller = init();

        controller.onLoad();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;

            expect(actual.pointAccueil.codePostal).toStrictEqual(expected);
            done();
        })
    });

    it("doit fournir le nom de la commune quand le point d'accueil est récupéré", (done) => {
        const expected = pointAccueilStub.nmCommu;

        const controller = init();

        controller.onLoad();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;

            expect(actual.pointAccueil.commune).toStrictEqual(expected);
            done();
        })
    });

    it("doit fournir le nom de la voie quand le point d'accueil est récupéré", (done) => {
        const expected = pointAccueilStub.nmVoie;

        const controller = init();

        controller.onLoad();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;

            expect(actual.pointAccueil.nomVoie).toStrictEqual(expected);
            done();
        })
    });

    it("doit fournir le numéro de voie quand le point d'accueil est récupéré", (done) => {
        const expected = pointAccueilStub.noVoie;

        const controller = init();

        controller.onLoad();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;

            expect(actual.pointAccueil.noVoie).toStrictEqual(expected);
            done();
        })
    });

    it("doit fournir le type de voie quand le point d'accueil est récupéré", (done) => {
        const expected = pointAccueilStub.liNatuVoie;

        const controller = init();

        controller.onLoad();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;

            expect(actual.pointAccueil.typeVoie).toStrictEqual(expected);
            done();
        })
    });

    it("doit fournir les horaires du point d'accueil quand le point d'accueil est récupéré", (done) => {
        const expected = pointAccueilStub.horairesOuvertureFermetures;

        const controller = init();

        controller.onLoad();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;

            expect(actual.pointAccueil.horairesOuvertureFermetures).toBe(expected);
            done();
        })
    });
});
