import {init} from "./common/Init";
import {ChoixContactModelView} from "../../../Presentation/pages/Authentification/ModelView/PourVousJoindre/ChoixContactModelView";
import {AutreChoixCode} from "../../../Domain/Data/Enum/AutreChoix";

describe("Vous joindre - OnTelephonePourVousJoindreChanged", function () {

    it("doit récupérer le choix sélectionné", function(done) {
        const expected = "0101010101";

        const controller = init();

        controller.onChoixContactSelected({code: AutreChoixCode.TELEPHONE, libelle: ""} as ChoixContactModelView);

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.pourVousJoindre.noTel).toBe(expected);
            done();
        });

        controller.onTelephonePourVousJoindreChanged(expected);
    });
})
