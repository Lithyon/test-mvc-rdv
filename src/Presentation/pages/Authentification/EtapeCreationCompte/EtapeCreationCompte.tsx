import AuthentificationController, {AuthentificationModelView} from "../AuthentificationController";
import BandeauModification from "../BandeauModification/BandeauModification";
import CreationCompte from "../CreationCompte";
import React from "react";

export interface EtapeCreationCompteProps {
    readonly state: AuthentificationModelView;
    readonly controller: AuthentificationController;
}

export default function EtapeCreationCompte({state, controller}: EtapeCreationCompteProps) {
    return <>
        <BandeauModification dataSource={state.rendezVous}/>
        <CreationCompte
            formError={state.formError}
            dataSource={state.creationCompte}
            rendezVous={state.rendezVous}
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
            formHasError={controller.formHasError}
        />
    </>;
}