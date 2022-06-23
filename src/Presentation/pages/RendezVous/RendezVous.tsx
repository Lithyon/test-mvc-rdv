import BandeauPointAccueil from "./BandeauPointAccueil";
import PriseRendezVous from "./PriseRendezVous";
import RendezVousController from "./RendezVousController";
import useAttachController from "../../hooks/useAttachController";
import useInitContexte from "../../hooks/useInitContexte";
import ErrorIsTriggered from "../../commons/ErrorEvent/ErrorIsTriggered";
import useErrorObservable from "../../hooks/useErrorObservable";
import DisplayError from "../../components/DisplayError";

interface RendezVousProps {
    readonly controller: RendezVousController;
}

export default function RendezVous({controller}: RendezVousProps) {
    const state = useAttachController(controller);

    useInitContexte(controller);

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
