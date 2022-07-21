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
            onCiviliteSelected={controller.onCiviliteSelected}
            onChangeNom={controller.onChangeNom}
            onChangePrenom={controller.onChangePrenom}
            onParrainageChoixSelected={controller.onParrainageChoixSelected}
            onChangeParrainageNumeroSocietaire={controller.onChangeParrainageNumeroSocietaire}
            informationsCommercialesEmail={state.informationsCommercialesEmail}
            onInformationsCommercialesEmailSelected={controller.onInformationsCommercialesEmailSelected}
            informationsCommercialesSms={state.informationsCommercialesSms}
            onInformationsCommercialesSmsSelected={controller.onInformationsCommercialesSmsSelected}
            informationsCommercialesTelephone={state.informationsCommercialesTelephone}
            onInformationsCommercialesTelephoneSelected={controller.onInformationsCommercialesTelephoneSelected}
            onCreationCompte={controller.onCreationCompte}
        />
    </>;
}
