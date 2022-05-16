import {init} from "./common/Init";
import domaineStub from "../../../../mocks/DomaineStub";

describe('Prise de rendez vous - OnLoad - Domaines', function () {

    it("doit proposer une liste de domaines", (done) => {
        const expected = domaineStub.codes;

        const controller = init();

        controller.onLoad();

        controller.subscribeStateChanged(() => {
            const actual = controller.state;

            expect(actual.domaines).toBe(expected);
            done();
        });
    });

    it("doit pré-renseigné le rdv", (done) => {
        const controller = init();

        controller.onLoad();

        controller.subscribeStateChanged(() => {
            const state = controller.state;

            expect(state.rendezVous).toStrictEqual({
                cdBuro: "7901",
                canalSelected: "",
                demandeSelected: "",
                domaineSelected: "",
                estFilleul: false,
                heure: 0,
                jour: 0,
                nmCommu: "NIORT",
                noSocietaireParrain: "",
                noTel: "",
                precision: ""
            })
            done();
        })
    });
    it("doit proposer une liste de demandes", (done) => {
        const controller = init();

        controller.onDomaineSelected("01");

        controller.subscribeStateChanged(() => {
            const state = controller.state;

            expect(state.demandes[0]).toStrictEqual({
                libelle: "ffe",
                code: "01"
            });
            done();
        })
    });
});
