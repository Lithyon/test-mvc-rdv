import {init} from "./common/Init";
import {InformationCommercialeCode} from "../../../Domain/Data/Enum/InformationsCommerciales";
import {
    InformationsCommercialesModelView
} from "../../../Presentation/pages/Authentification/ModelView/InformationsCommerciales/InformationsCommercialesModelView";

describe('Creation de compte - OnInformationsCommercialesEmailSelected', function () {
    it("doit récupérer l'information commerciales e-mail", function (done) {
        const expected = {code: InformationCommercialeCode.OUI, libelle: "Oui"};

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.creationCompte.informationsCommercialesEmail).toBe(expected);
            done()
        })
        controller.onInformationsCommercialesEmailSelected(expected as InformationsCommercialesModelView)
    });
})