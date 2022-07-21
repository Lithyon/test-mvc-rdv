import {init} from "./common/Init";
import {ProfessionModelView} from "../../../Presentation/pages/Authentification/ModelView/Profession/ProfessionModelView";

describe('Creation de compte - onChangeProfession', function () {
    it('doit récupérer la profession', function (done) {
        const expected = {libelle: "Apprenti", code: "XA"};

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;

            expect(actual.creationCompte.profession).toBe(expected);
            done();
        })

        controller.onChangeProfession(expected as ProfessionModelView);
    });
})
