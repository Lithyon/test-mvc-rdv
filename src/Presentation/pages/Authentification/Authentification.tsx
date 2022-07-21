import AuthentificationController from "./AuthentificationController";
import BandeauModification from "./BandeauModification/BandeauModification";
import useAttachController from "../../hooks/useAttachController";
import CreationCompte from "./CreationCompte";

interface AuthentificationProps {
    readonly controller: AuthentificationController;
}

export default function Authentification({controller}: AuthentificationProps) {
    const state = useAttachController(controller);

    return <>
        <BandeauModification dataSource={state.rendezVous}/>
        <CreationCompte
            formError={state.formError}
            dataSource={state.creationCompte}
            rendezVous={state.rendezVous}
            civilite={state.civilite}
            parrainageChoix={state.parrainageChoix}
            communes={state.communes}
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
            onInformationsCommercialesEmailSelected={controller.onInformationsCommercialesEmailSelected}
            onInformationsCommercialesSmsSelected={controller.onInformationsCommercialesSmsSelected}
            onInformationsCommercialesTelephoneSelected={controller.onInformationsCommercialesTelephoneSelected}
            onCreationCompte={controller.onCreationCompte}
            formHasError={controller.formHasError}
        />
    </>;
}
