import {init} from "./common/Init";
import {CiviliteCode} from "../../../Domain/Data/Enum/DefaultCivilite";
import {CiviliteModelView} from "../../../Presentation/pages/Authentification/ModelView/Civilite/CiviliteModelView";

describe('Creation de compte', function () {
    it('doit récupérer la civilité', function (done) {
        const expected = CiviliteCode.MONSIEUR;

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;

            expect(actual.creationCompte.civilite.code).toBe(expected);
            done();
        })

        controller.onCiviliteSelected({code: expected, libelle: "Monsieur"} as CiviliteModelView);
    });
})