import {init} from "./common/Init";
import {ChoixConnexionCode} from "../../../Domain/Data/Enum/ChoixConnexion";
import ChoixConnexionModelView from "../../../Presentation/pages/RendezVous/ModelView/ChoixConnexion/ChoixConnexionModelView";

describe('Prise de rendez vous - OnChoixConnexionSelected', function () {

    it("doit renseigner le type de connexion pour la prise de rendez vous", function (done) {
        const expected = ChoixConnexionCode.NO_ACCOUNT;

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.rendezVous.choixConnexionSelected).toBe(expected);

            done();
        });

        controller.onChoixConnexionSelected({code: expected, libelle: ""} as ChoixConnexionModelView);
    });

});
