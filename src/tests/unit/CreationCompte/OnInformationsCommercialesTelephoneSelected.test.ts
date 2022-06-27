import {init} from "./common/Init";
import {BooleanChoiceCode} from "../../../Domain/Data/Enum/BooleanChoice";
import {BooleanChoiceModelView} from "../../../Presentation/commons/ModelView/BooleanChoice/BooleanChoiceModelView";

describe('Creation de compte - OnInformationsCommercialesTelephoneSelected', function () {
    it("doit récupérer l'information commerciales Telephone", function (done) {
        const expected = {code: BooleanChoiceCode.OUI, libelle: "Oui"};

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.creationCompte.informationsCommercialesTelephone).toBe(expected);
            done()
        })
        controller.onInformationsCommercialesTelephoneSelected(expected as BooleanChoiceModelView)
    });
})