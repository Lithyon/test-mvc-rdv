import BaseController from "../../commons/BaseController";
import RendezVousModelView from "../RendezVous/ModelView/RendezVous/RendezVousModelView";
import RendezVousSelectionModelView from "../RendezVous/ModelView/RendezVous/RendezVousSelectionModelView";

interface AuthentificationModelView {
    readonly rendezVous: RendezVousSelectionModelView
}

interface AuthentificationControllerDependencies {
}

export default class AuthentificationController extends BaseController<AuthentificationModelView> {
    private readonly _state: AuthentificationModelView;

    constructor(readonly dependencies: AuthentificationControllerDependencies) {
        super();
        const stateForm = window.history.state?.usr as RendezVousModelView;
        this._state = {
            rendezVous: stateForm.rendezVous
        };
    }

    get state(): AuthentificationModelView {
        return this._state;
    }
}
