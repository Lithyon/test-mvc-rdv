import AuthentificationController from "./AuthentificationController";
import useAttachController from "../../hooks/useAttachController";
import useInitContexte from "../../hooks/useInitContexte";
import React from "react";
import LoadWaitingIsOver from "../../commons/LoadingEvent/LoadWaitingIsOver";
import useLoaderObservable from "../../hooks/useLoaderObservable";
import DisplayError from "../../components/DisplayError";
import ErrorIsTriggered from "../../commons/ErrorEvent/ErrorIsTriggered";
import useErrorObservable from "../../hooks/useErrorObservable";
import {Loader} from "macif-components";
import EtapeCreationCompte from "./EtapeCreationCompte";
import EtapePourVousJoindre from "./EtapePourVousJoindre";

interface AuthentificationProps {
    readonly controller: AuthentificationController;
}

export default function Authentification({controller}: AuthentificationProps) {

    const state = useAttachController(controller);
    useInitContexte(controller);
    const {hasError}: ErrorIsTriggered = useErrorObservable(controller.hasErrorObserver);
    const {isOver}: LoadWaitingIsOver = useLoaderObservable(controller.onLoadAuthentificationObserver);
    if (hasError) {
        return <DisplayError/>;
    }
    if (!isOver) {
        return <Loader ball className="mcf-mx--auto"/>;
    }
    if (isOver && state.estConnecte) {
        return <EtapePourVousJoindre state={state} controller={controller}/>;
    }
    return <EtapeCreationCompte state={state} controller={controller}/>;
}
