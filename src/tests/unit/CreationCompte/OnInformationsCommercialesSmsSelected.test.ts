import {init} from "./common/Init";
import {BooleanChoiceCode} from "../../../Domain/Data/Enum/BooleanChoice";
import {BooleanChoiceModelView} from "../../../Presentation/commons/ModelView/BooleanChoice/BooleanChoiceModelView";

describe('Creation de compte - OnInformationsCommercialesSmsSelected', function () {
    it("doit récupérer l'information commerciales SMS", function (done) {
        const expected = {code: BooleanChoiceCode.OUI, libelle: "Oui"};

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.creationCompte.informationsCommercialesSms).toBe(expected);
            done()
        })
        controller.onInformationsCommercialesSmsSelected(expected as BooleanChoiceModelView)
    });
})