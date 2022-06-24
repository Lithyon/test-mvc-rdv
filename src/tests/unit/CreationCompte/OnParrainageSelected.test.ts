import {init} from "./common/Init";
import {ParrainageCode} from "../../../Domain/Data/Enum/Parrainage";
import {ParrainageChoixModelView} from "../../../Presentation/pages/Authentification/ModelView/Parrainage/ParrainageChoixModelView";
import {
    ParrainageNumeroSocietaireModelView
} from "../../../Presentation/pages/Authentification/ModelView/Parrainage/ParrainageNumeroSocietaireModelView";

describe("Creation de compte - OnParrainageSelected", function () {
    it("doit récupérer la sélection du parrainage", function (done) {
        const expected = {code: ParrainageCode.OUI, libelle: "Oui"} as ParrainageChoixModelView;

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.creationCompte.parrainageChoix).toStrictEqual(expected);
            done();
        });
        controller.onParrainageChoixSelected(expected);
    });

    it("doit vérifier le numéro du parrain", function (done) {
        const expected = "0000";

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.creationCompte.parrainageNumeroSocietaire.numeroSocietaire).toBe(expected);
            done();
        });
        controller.onChangeParrainageNumeroSocietaire(expected);
    });
});