import {defaultDependenciesInitPriseRendezVous, init} from "./common/Init";
import rendezVousRequestStub from "../../../../mocks/RendezVousRequestStub";
import HeureDisponibleModelView from "../../../Presentation/pages/RendezVous/ModelView/Disponibilites/HeureDisponibleModelView";
import {ChoixConnexionCode} from "../../../Domain/Data/Enum/ChoixConnexion";

describe('Prise de rendez vous - OnHeureSelected', function () {

    it("doit renseigner l'heure sélectionné pour la prise de rendez vous", function (done) {
        const expected = rendezVousRequestStub.heure;

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.rendezVous.heure.code).toBe(expected);

            done();
        });

        controller.onHeureSelected({code: 1, libelle: ""} as HeureDisponibleModelView);
    });

    it("doit renseigner le choix de connexion si déjà connecté", function (done) {
        const expected = ChoixConnexionCode.HAS_ACCOUNT;

        const controller = init({
            ...defaultDependenciesInitPriseRendezVous,
            estConnecte: true
        });

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.rendezVous.choixConnexionSelected.code).toBe(expected);

            done();
        });

        controller.onHeureSelected({code: 1, libelle: ""} as HeureDisponibleModelView);
    });

    it("ne doit pas renseigner le choix de connexion si non connecté", function (done) {
        const expected = "";

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.rendezVous.choixConnexionSelected.code).toBe(expected);

            done();
        });

        controller.onHeureSelected({code: 1, libelle: ""} as HeureDisponibleModelView);
    });

});
