import {init} from "./common/Init";
import {
    SituationFamilialeModelView
} from "../../../Presentation/pages/Authentification/ModelView/SituationFamiliale/SituationFamilialeModelView";

describe('Creation de compte - OnSituationFamilialeSelected', function () {
    it('doit récupérer la situation familiale', function (done) {
        const expected = {libelle: "Célibataire", code: "C"};

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;

            expect(actual.creationCompte.situationFamiliale).toBe(expected);
            done();
        })

        controller.onChangeSituationFamiliale(expected as SituationFamilialeModelView);
    });
})
