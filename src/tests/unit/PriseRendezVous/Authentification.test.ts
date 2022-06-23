import {NavigateFunction} from "react-router-dom";
import {init} from "./common/Init";
import {ChoixConnexionCode} from "../../../Domain/Data/Enum/ChoixConnexion";
import ChoixConnexionModelView from "../../../Presentation/pages/RendezVous/ModelView/ChoixConnexion/ChoixConnexionModelView";
import {debug} from "util";

describe('Prise de rendez vous - OnChoixConnexionSelected', () => {

    it("doit vérifier que l'on est redirigé vers le bandeau de modification", (done) => {
        const controller = init();

        controller.subscribeStateChanged(() => {
            const redirectionVersAuthentification = jest.spyOn(controller, "redirectionVersAuthentification");

            controller.onValidationFormulaire(() => done());
            expect(redirectionVersAuthentification).toHaveBeenCalled();
        });

        controller.onChoixConnexionSelected({code: ChoixConnexionCode.NO_ACCOUNT, libelle: ""} as ChoixConnexionModelView);
    });

    it("doit vérifier que l'on est redirigé vers la page de connexion", (done) => {
        const controller = init();

        controller.subscribeStateChanged(() => {
            const redirectionMireDeConnexion = jest.spyOn(controller, "redirectionMireDeConnexion");

            controller.onValidationFormulaire(() => {}).then(() => done());
            expect(redirectionMireDeConnexion).toHaveBeenCalled();
        });

        controller.onChoixConnexionSelected({code: ChoixConnexionCode.HAS_ACCOUNT, libelle: ""} as ChoixConnexionModelView);
    });

});
