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
            dataSource={state.creationCompte}
            civilite={state.civilite}
            onCiviliteSelected={controller.onCiviliteSelected}
            informationsCommercialesEmail={state.informationsCommercialesEmail}
            onInformationsCommercialesEmailSelected={controller.onInformationsCommercialesEmailSelected}
            informationsCommercialesSms={state.informationsCommercialesSms}
            onInformationsCommercialesSmsSelected={controller.onInformationsCommercialesSmsSelected}
            informationsCommercialesTelephone={state.informationsCommercialesTelephone}
            onInformationsCommercialesTelephoneSelected={controller.onInformationsCommercialesTelephoneSelected}
        />
        {/*<pre><code>{JSON.stringify(controller.state, null, 4)}</code></pre>*/}
    </>
}
