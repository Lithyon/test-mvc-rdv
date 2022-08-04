import ChoiceSwitcher from "../../../components/ChoiceSwitcher";
import {PourVousJoindreModelView} from "../ModelView/PourVousJoindre/PourVousJoindreModelView";
import Input from "../../../components/Input";
import React from "react";
import {Button, Form} from "macif-components";
import {AutreChoixCode} from "../../../../Domain/Data/Enum/AutreChoix";
import FormErrorPourVousJoindreModelView from "../ModelView/FormError/FormErrorPourVousJoindreModelView";
import CanalModelView from "../../RendezVous/ModelView/Canal/CanalModelView";
import {CanalCode} from "../../../../Domain/Data/Enum/Canal";

export interface PourVousJoindreProps {
    readonly dataSource: PourVousJoindreModelView;
    readonly canalSelected: CanalModelView;
    readonly onChoixPourVousJoindreSelected: Function;
    readonly onTelephonePourVousJoindreChanged: Function;
    readonly onEmailPourVousJoindreChanged: Function;
    readonly onValidationRendezVous: Function;
    readonly formError: FormErrorPourVousJoindreModelView;
    readonly formHasError: Function;
}

export default function PourVousJoindre({
                                            dataSource,
                                            canalSelected,
                                            onChoixPourVousJoindreSelected,
                                            onTelephonePourVousJoindreChanged,
                                            onEmailPourVousJoindreChanged,
                                            onValidationRendezVous,
                                            formError,
                                            formHasError
                                        }: PourVousJoindreProps) {

    const hasError = formHasError();

    function handleValidationRendezVous() {
        onValidationRendezVous();
    }

    const choiceSelected = canalSelected.code === CanalCode.VISIO
        ? dataSource.listeChoixContacts.listeEmails
        : dataSource.listeChoixContacts.listeNumerosTelephones;

    function onChoixLabelSwitcher() {
        switch (canalSelected.code) {
            case CanalCode.TELEPHONE:
                return "Sélectionnez le numéro de téléphone sur lequel nous pourrons vous contacter pour votre rendez-vous par téléphone";
            case CanalCode.AGENCE:
                return "Sélectionnez le numéro de téléphone sur lequel nous pourrons vous contacter pour votre rendez-vous en agence";
            case CanalCode.VISIO:
                return "Sélectionnez l'e-mail sur lequel nous pouvons vous envoyer les informations et le lien d'accès à votre rendez-vous en visioconférence";
            default:
                return "";
        }
    }

    return <>
        <Form className="mcf-mt--5">
            <h1 id="pour-vous-joindre">Pour vous joindre</h1>

            <ChoiceSwitcher id="vousJoindre"
                            onChoiceSelected={onChoixPourVousJoindreSelected}
                            choiceSelected={dataSource.choixContact}
                            dataSource={choiceSelected}
                            label={onChoixLabelSwitcher()}
                            errorMessage={formError.choixContact}/>

            {dataSource.choixContact.code === AutreChoixCode.TELEPHONE &&
                <Input id={AutreChoixCode.TELEPHONE}
                       label="Numéro de téléphone"
                       onChange={onTelephonePourVousJoindreChanged}
                       message="Veuillez renseigner le numéro sur lequel vous souhaitez être joint"
                       value={dataSource.noTel}
                       maxLength={10}
                       errorMessage={formError.numeroTelephone}
                />}

            {dataSource.choixContact.code === AutreChoixCode.MAIL &&
                <Input id={AutreChoixCode.MAIL}
                       label="E-mail"
                       onChange={onEmailPourVousJoindreChanged}
                       message="Veuillez renseigner l'adresse e-mail sur laquelle vous souhaitez recevoir ces informations"
                       value={dataSource.adresseMail}
                       errorMessage={formError.email}
                />}

            <div className="mcf-d--flex mcf-justify-content--between">
                <Button variant="outline--primary">Annuler</Button>
                <Button variant="primary" onClick={handleValidationRendezVous} disabled={hasError}>
                    Confirmer mon rendez-vous
                </Button>
            </div>
        </Form>
    </>;
}
