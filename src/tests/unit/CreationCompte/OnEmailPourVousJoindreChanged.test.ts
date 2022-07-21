import {init} from "./common/Init";
import {ChoixContactModelView} from "../../../Presentation/pages/Authentification/ModelView/PourVousJoindre/ChoixContactModelView";
import {AutreChoixCode} from "../../../Domain/Data/Enum/AutreChoix";

describe("Vous joindre - onEmailPourVousJoindreChanged", function () {

    it("doit récupérer le choix sélectionné", function(done) {
        const expected = "masuper.email@toto.com";

        const controller = init();

        controller.onChoixContactSelected({code: AutreChoixCode.MAIL, libelle: ""} as ChoixContactModelView);

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.pourVousJoindre.adresseMail).toBe(expected);
            done();
        });

        controller.onEmailPourVousJoindreChanged(expected);
    });
})
