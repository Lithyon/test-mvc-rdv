import {init} from "./common/Init";
import {BooleanChoiceCode} from "../../../Domain/Data/Enum/BooleanChoice";
import {BooleanChoiceModelView} from "../../../Presentation/commons/ModelView/BooleanChoice/BooleanChoiceModelView";

describe('Creation de compte - OnInformationsCommercialesEmailSelected', function () {
    it("doit récupérer l'information commerciales e-mail", function (done) {
        const expected = {code: BooleanChoiceCode.OUI, libelle: "Oui"};

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.creationCompte.informationsCommercialesEmail).toBe(expected);
            done()
        })
        controller.onInformationsCommercialesEmailSelected(expected as BooleanChoiceModelView)
    });
})