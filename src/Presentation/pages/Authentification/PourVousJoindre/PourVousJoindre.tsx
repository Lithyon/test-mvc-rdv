import ChoiceSwitcher from "../../../components/ChoiceSwitcher";
import {PourVousJoindreModelView} from "../ModelView/PourVousJoindre/PourVousJoindreModelView";
import Input from "../../../components/Input";
import React from "react";
import {Button, Col, Form, Row} from "macif-components";
import {AutreChoixCode} from "../../../../Domain/Data/Enum/AutreChoix";
import FormErrorPourVousJoindreModelView from "../ModelView/FormError/FormErrorPourVousJoindreModelView";
import CanalModelView from "../../RendezVous/ModelView/Canal/CanalModelView";
import {CanalCode} from "../../../../Domain/Data/Enum/Canal";
import {ChoixContactModelView} from "../ModelView/PourVousJoindre/ChoixContactModelView";

export interface PourVousJoindreProps {
    readonly dataSource: PourVousJoindreModelView;
    readonly canalSelected: CanalModelView;
    readonly onChoixContactSelected: (value: ChoixContactModelView) => void;
    readonly onTelephonePourVousJoindreChanged: Function;
    readonly onEmailPourVousJoindreChanged: Function;
    readonly onValidationRendezVous: Function;
    readonly formError: FormErrorPourVousJoindreModelView;
    readonly verificationErreursPourVousJoindre: Function;
}

export default function PourVousJoindre({
                                            dataSource,
                                            canalSelected,
                                            onChoixContactSelected,
                                            onTelephonePourVousJoindreChanged,
                                            onEmailPourVousJoindreChanged,
                                            onValidationRendezVous,
                                            formError,
                                            verificationErreursPourVousJoindre
                                        }: PourVousJoindreProps) {

    const hasError = verificationErreursPourVousJoindre();
    const handleValidationRendezVous = () => onValidationRendezVous();
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
                            onChoiceSelected={onChoixContactSelected}
                            choiceSelected={dataSource.choixContact}
                            dataSource={choiceSelected}
                            label={onChoixLabelSwitcher()}
                            errorMessage={formError.choixContact}/>
            {dataSource.choixContact.code === AutreChoixCode.TELEPHONE &&
                <div className="mcf-mr--3 mcf-mb--6">
                    <Input id={AutreChoixCode.TELEPHONE}
                           label="Numéro de téléphone"
                           type="tel"
                           classNameControl="mcf-w-sm--50 mcf-w-md--25"
                           onChange={onTelephonePourVousJoindreChanged}
                           message="Veuillez renseigner le numéro sur lequel vous souhaitez être joint"
                           value={dataSource.noTel}
                           maxLength={10}
                           errorMessage={formError.numeroTelephone}
                    />
                </div>
            }
            {dataSource.choixContact.code === AutreChoixCode.MAIL &&
                <div className="mcf-mr--3 mcf-mb--6">
                    <Input id={AutreChoixCode.MAIL}
                           label="E-mail"
                           type="email"
                           classNameControl="mcf-w-sm--75 mcf-w-md--50"
                           onChange={onEmailPourVousJoindreChanged}
                           message="Veuillez renseigner l'adresse e-mail sur laquelle vous souhaitez recevoir ces informations"
                           value={dataSource.adresseMail}
                           errorMessage={formError.email}
                    />
                </div>
            }
            <Row className="mcf-justify-content--between">
                <Col className="mcf-pl--0 mcf-order-sm-1 mcf-mb--4" sm="6" md="3">
                    <Button block variant="primary" onClick={handleValidationRendezVous} disabled={hasError}
                            data-track-analytics="Rdv_Informations_Confirmer">
                        Confirmer mon rendez-vous
                    </Button>
                </Col>
                <Col className="mcf-pl--0" sm="6" md="2">
                    <Button block href="/" variant="outline--primary" data-track-analytics="Rdv_Informations_Annuler">Annuler</Button>
                </Col>
            </Row>
        </Form>
    </>;
}
