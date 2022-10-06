import AuthentificationController from "./AuthentificationController";
import useAttachController from "../../hooks/useAttachController";
import useInitContexte from "../../hooks/useInitContexte";
import React, {useEffect} from "react";
import LoadWaitingIsOver from "../../commons/LoadingEvent/LoadWaitingIsOver";
import useLoaderObservable from "../../hooks/useLoaderObservable";
import ErrorIsTriggered from "../../commons/ErrorEvent/ErrorIsTriggered";
import useErrorObservable from "../../hooks/useErrorObservable";
import {Loader} from "macif-components";
import EtapeCreationCompte from "./EtapeCreationCompte";
import EtapePourVousJoindre from "./EtapePourVousJoindre";
import DisplayError from "../../components/DisplayError";

interface AuthentificationProps {
    readonly controller: AuthentificationController;
}

export default function Authentification({controller}: AuthentificationProps) {
    const state = useAttachController(controller);

    useInitContexte(controller);

    const {hasError}: ErrorIsTriggered = useErrorObservable(controller.hasErrorObserver);
    const {isOver}: LoadWaitingIsOver = useLoaderObservable(controller.onLoadAuthentificationObserver);

    useEffect(() => {
        if (isOver) {
            window.scroll({top: 0, behavior: "smooth"});
        }
    }, [isOver]);

    if (hasError) {
        return <DisplayError/>;
    }

    if (!isOver) {
        return <Loader ball className="mcf-mx--auto"/>;
    }

    if (isOver && state.estConnecte) {
        return <EtapePourVousJoindre rendezVous={state.rendezVous}
                                     pourVousJoindre={state.pourVousJoindre}
                                     canalSelected={state.rendezVous.canalSelected}
                                     isAgenceVirtuelle={state.isAgenceVirtuelle}
                                     onChoixContactSelected={controller.onChoixContactSelected}
                                     onTelephonePourVousJoindreChanged={controller.onTelephonePourVousJoindreChanged}
                                     onEmailPourVousJoindreChanged={controller.onEmailPourVousJoindreChanged}
                                     onCreationRendezVous={controller.onCreationRendezVous}
                                     formErrorPourVousJoindre={state.formErrorPourVousJoindre}
                                     afficherModaleConfirmation={state.afficherModaleConfirmation}
                                     chargementCreationRendezVousConnecte={state.chargementCreationRendezVousConnecte}
        />;
    }
    return <EtapeCreationCompte rendezVous={state.rendezVous}
                                isAgenceVirtuelle={state.isAgenceVirtuelle}
                                formError={state.formError}
                                creationCompte={state.creationCompte}
                                civilite={state.civilite}
                                parrainageChoix={state.parrainageChoix}
                                communes={state.communes}
                                situationFamiliale={state.situationFamiliale}
                                profession={state.profession}
                                informationsCommercialesEmail={state.informationsCommercialesEmail}
                                informationsCommercialesSms={state.informationsCommercialesSms}
                                informationsCommercialesTelephone={state.informationsCommercialesTelephone}
                                onCiviliteSelected={controller.onCiviliteSelected}
                                onChangeNom={controller.onChangeNom}
                                onChangePrenom={controller.onChangePrenom}
                                onChangeNumeroTelephone={controller.onChangeNumeroTelephone}
                                onChangeEmail={controller.onChangeEmail}
                                onParrainageChoixSelected={controller.onParrainageChoixSelected}
                                onCommuneSelected={controller.onCommuneSelected}
                                onRechercheCommune={controller.onRechercheCommune}
                                onChangeParrainageNumeroSocietaire={controller.onChangeParrainageNumeroSocietaire}
                                onChangeDateNaissance={controller.onChangeDateNaissance}
                                onChangeSituationFamiliale={controller.onChangeSituationFamiliale}
                                onChangeProfession={controller.onChangeProfession}
                                onInformationsCommercialesEmailSelected={controller.onInformationsCommercialesEmailSelected}
                                onInformationsCommercialesSmsSelected={controller.onInformationsCommercialesSmsSelected}
                                onInformationsCommercialesTelephoneSelected={controller.onInformationsCommercialesTelephoneSelected}
                                onCreationCompte={controller.onCreationCompte}
                                hasErrorDejaUnCompteObserver={controller.hasErrorDejaUnCompteObserver}
                                fermerCompteDejaExistantModale={controller.fermerCompteDejaExistantModale}
                                redirectionMireDeConnexion={controller.redirectionMireDeConnexion}
                                onAfficherModaleModificationEmail={controller.onAfficherModaleModificationEmail}
                                afficherModalModificationEmail={state.afficherModalModificationEmail}
                                afficherModaleConfirmation={state.afficherModaleConfirmation}
                                chargementCreationRendezVousNonConnecte={state.chargementCreationRendezVousNonConnecte}
    />;
}
