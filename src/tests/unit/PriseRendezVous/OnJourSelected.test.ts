import {init} from "./common/Init";

describe('Prise de rendez vous - OnJourSelected', function () {

    it("doit renseigner le jour sélectionné pour la prise de rendez vous", function (done) {
        const expected = new Date(0);

        const controller = init();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;
            expect(actual.rendezVous.jour).toBe(expected);

            done();
        });

        controller.onJourSelected(expected);
    });

});
