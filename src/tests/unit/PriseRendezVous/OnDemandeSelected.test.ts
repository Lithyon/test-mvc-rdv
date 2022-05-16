import {init} from "./common/Init";
import rendezVousRequestStub from "../../../../mocks/RendezVousRequestStub";
import {TypeDemande} from "../../../Domain/Repository/Data/Enum/Demande";
import {TypeDomaine} from "../../../Domain/Repository/Data/Enum/Domaine";

describe('Prise de rendez vous - OnDomaineSelected', function () {

    it("doit renseigner le code demande sélectionné pour la prise de rendez vous", function (done) {
        const expected = rendezVousRequestStub.cdDemande;

        const controller = init();

        controller.subscribeStateChanged(() => {
            controller.unsubscribeStateChanged();

            controller.subscribeStateChanged(() => {
                const actual = controller.state;
                expect(actual.rendezVous.demandeSelected).toBe(expected);

                done();
            });

            controller.onDemandeSelected(TypeDemande.DEVIS);
        });

        controller.onDomaineSelected(TypeDomaine.AUTO);
    });

});
