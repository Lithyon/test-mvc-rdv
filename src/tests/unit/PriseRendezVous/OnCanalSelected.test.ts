import {init} from "./common/Init";
import disponibilitesStub from "../../../../mocks/DisponibilitesStub";
import {CanalCode} from "../../../Domain/Data/Enum/Canal";
import CanalModelView from "../../../Presentation/pages/RendezVous/ModelView/Canal/CanalModelView";

describe('Prise de rendez vous - OnCanalSelected', function () {

    it("doit récupérer le canal sélectionné par l'utilisateur", function (done) {
        const expected = CanalCode.AGENCE;

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;

            expect(actual.rendezVous.canalSelected.code).toBe(expected);
            done();
        });

        controller.onCanalSelected({code: expected, libelle: ""} as CanalModelView);
    });

    it("doit récupérer les disponibilités lorsque le canal est sélectionné", function (done) {
        const expected = disponibilitesStub.disponibilites.length;

        const controller = init();

        controller.subscribeStateChanged(() => {
            controller.subscribeStateChanged(() => {
                const actual = controller.state;

                expect(actual.disponibilites.disponibilites.length).toBe(expected);
                done();
            });
        });

        controller.onCanalSelected({code: CanalCode.AGENCE, libelle: ""} as CanalModelView);
    });
});
