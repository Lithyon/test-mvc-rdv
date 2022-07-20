import BandeauPointAccueil from "./BandeauPointAccueil";
import PriseRendezVous from "./PriseRendezVous";
import RendezVousController from "./RendezVousController";
import useAttachController from "../../hooks/useAttachController";
import useInitContexte from "../../hooks/useInitContexte";
import ErrorIsTriggered from "../../commons/ErrorEvent/ErrorIsTriggered";
import useErrorObservable from "../../hooks/useErrorObservable";
import DisplayError from "../../components/DisplayError";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import PagesDetails from "../PagesDetails";

interface RendezVousProps {
    readonly controller: RendezVousController;
}

export default function RendezVous({controller}: RendezVousProps) {
    const state = useAttachController(controller);

    useInitContexte(controller);
    const navigate = useNavigate();
    const sessionState = sessionStorage.getItem("formulaire_creation_rdv");

    useEffect(() => {
        if (sessionState) {
            sessionStorage.removeItem("formulaire_creation_rdv");
            navigate(PagesDetails.Auth.link, {
                state
            });
        }
    }, [navigate, state, sessionState]);

    const {hasError}: ErrorIsTriggered = useErrorObservable(controller.hasErrorObserver);
    if (hasError) {
        return <DisplayError/>
    }
    return (
        <>
            <BandeauPointAccueil dataSource={state.pointAccueil}/>
            <PriseRendezVous dataSource={state.rendezVous}
                             demandes={state.demandes}
                             domaines={state.domaines}
                             canal={state.canal}
                             onDomaineSelected={controller.onDomaineSelected}
                             onDemandeSelected={controller.onDemandeSelected}
                             onCanalSelected={controller.onCanalSelected}
                             onPrecisionChanged={controller.onPrecisionChanged}
                             disponibilites={state.disponibilites}
                             onJourSelected={controller.onJourSelected}
                             loadDisponibilites={controller.loadDisponibilites}
                             onHeureSelected={controller.onHeureSelected}
                             onLoadDisponibilitesObserver={controller.onLoadDisponibilitesObserver}
                             hasErrorDisponibilitesObserver={controller.hasErrorDisponibilitesObserver}
                             choixConnexion={state.choixConnexion}
                             onChoixConnexionSelected={controller.onChoixConnexionSelected}
                             onValidationFormulaire={controller.onValidationFormulaire}/>
        </>
    );
}
