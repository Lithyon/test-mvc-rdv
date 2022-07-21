import {init} from "./common/Init";
import {ChoixContactModelView} from "../../../Presentation/pages/Authentification/ModelView/PourVousJoindre/ChoixContactModelView";

describe("Vous joindre - OnEmailSelected", function () {

    it("doit récupérer le choix sélectionné", function(done) {
        const expected = "toto@test.com";

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;

            expect(actual.pourVousJoindre.choixContact.code).toBe(expected);
            done();
        });

        controller.onChoixContactSelected({code: expected, libelle: ""} as ChoixContactModelView);
    });
})
