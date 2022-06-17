import {init} from "./common/Init";
import {InformationCommercialeCode} from "../../../Domain/Data/Enum/InformationsCommerciales";
import {
    InformationsCommercialesModelView
} from "../../../Presentation/pages/Authentification/ModelView/InformationsCommerciales/InformationsCommercialesModelView";

describe('Creation de compte - OnInformationsCommercialesTelephoneSelected', function () {
    it("doit récupérer l'information commerciales Telephone", function (done) {
        const expected = {code: InformationCommercialeCode.OUI, libelle: "Oui"};

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.creationCompte.informationsCommercialesTelephone).toBe(expected);
            done()
        })
        controller.onInformationsCommercialesTelephoneSelected(expected as InformationsCommercialesModelView)
    });
})