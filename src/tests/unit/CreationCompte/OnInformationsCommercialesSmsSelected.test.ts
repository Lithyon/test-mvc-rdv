import {init} from "./common/Init";
import {InformationCommercialeCode} from "../../../Domain/Data/Enum/InformationsCommerciales";
import {
    InformationsCommercialesModelView
} from "../../../Presentation/pages/Authentification/ModelView/InformationsCommerciales/InformationsCommercialesModelView";

describe('Creation de compte - OnInformationsCommercialesSmsSelected', function () {
    it("doit récupérer l'information commerciales SMS", function (done) {
        const expected = {code: InformationCommercialeCode.OUI, libelle: "Oui"};

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.creationCompte.informationsCommercialesSms).toBe(expected);
            done()
        })
        controller.onInformationsCommercialesSmsSelected(expected as InformationsCommercialesModelView)
    });
})