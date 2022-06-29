import {init} from "./common/Init";
import {BooleanChoiceCode} from "../../../Domain/Data/Enum/BooleanChoice";
import {BooleanChoiceModelView} from "../../../Presentation/commons/ModelView/BooleanChoice/BooleanChoiceModelView";

describe("Creation de compte - OnParrainageSelected", function () {
    it("doit récupérer la sélection du parrainage", function (done) {
        const expected = {code: BooleanChoiceCode.OUI, libelle: "Oui"} as BooleanChoiceModelView;

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
            expect(actual.rendezVous.noSocietaireParrain).toBe(expected);
            done();
        });
        controller.onChangeParrainageNumeroSocietaire(expected);
    });
});