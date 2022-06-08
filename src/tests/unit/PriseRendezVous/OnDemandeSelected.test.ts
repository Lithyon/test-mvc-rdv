import {init} from "./common/Init";
import rendezVousRequestStub from "../../../../mocks/RendezVousRequestStub";
import {TypeDemande} from "../../../Domain/Data/Enum/Demande";
import {TypeDomaine} from "../../../Domain/Data/Enum/Domaine";
import DomaineModelView from "../../../Presentation/pages/RendezVous/ModelView/Domaine/DomaineModelView";
import DemandeModelView from "../../../Presentation/pages/RendezVous/ModelView/Demande/DemandeModelView";

describe('Prise de rendez vous - OnDomaineSelected', function () {

    it("doit renseigner le code demande sélectionné pour la prise de rendez vous", function (done) {
        const expected = rendezVousRequestStub.cdDemande;

        const controller = init();

        controller.subscribeStateChanged(() => {
            controller.unsubscribeStateChanged();

            controller.subscribeStateChanged(() => {
                const actual = controller.state;
                expect(actual.rendezVous.demandeSelected.code).toBe(expected);

                done();
            });

            controller.onDemandeSelected({code: TypeDemande.DEVIS, libelle: ""} as DemandeModelView);
        });

        controller.onDomaineSelected({code: TypeDomaine.AUTO, libelle: ""} as DomaineModelView);
    });

});
