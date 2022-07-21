import AuthentificationController, {AuthentificationModelView} from "./AuthentificationController";
import BandeauModification from "./BandeauModification/BandeauModification";
import useAttachController from "../../hooks/useAttachController";
import CreationCompte from "./CreationCompte";
import useInitContexte from "../../hooks/useInitContexte";
import PourVousJoindre from "./PourVousJoindre/PourVousJoindre";

interface AuthentificationProps {
    readonly controller: AuthentificationController;
}

interface BandeauProps {
    readonly state: AuthentificationModelView;
    readonly controller: AuthentificationController;
}

function BandeauPourVousJoindre({state, controller}: BandeauProps) {
    return <>
        <BandeauModification dataSource={state.rendezVous}/>
        <PourVousJoindre dataSource={state.pourVousJoindre}
                         canalSelected={state.rendezVous.canalSelected}
                         onChoixPourVousJoindreSelected={controller.onChoixContactSelected}
                         onTelephonePourVousJoindreChanged={controller.onTelephonePourVousJoindreChanged}
                         onEmailPourVousJoindreChanged={controller.onEmailPourVousJoindreChanged}
                         onValidationRendezVous={controller.onValidationRendezVous}
                         formError={state.formErrorPourVousJoindre}
                         formHasError={controller.verificationErreursPourVousJoindre}
        />
    </>
}

function BandeauCreationCompte({state, controller}: BandeauProps) {
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

export default function Authentification({controller}: AuthentificationProps) {

    const state = useAttachController(controller);
    useInitContexte(controller);

    if (state.estConnecte) {
        return <BandeauPourVousJoindre state={state} controller={controller} />;
    }

    return <BandeauCreationCompte state={state} controller={controller} />;
}
