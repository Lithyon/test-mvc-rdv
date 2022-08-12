import BandeauModification from "../BandeauModification";
import PourVousJoindre from "../PourVousJoindre";
import React from "react";
import AuthentificationController, {AuthentificationModelView} from "../AuthentificationController";
import {Button, Modal} from "macif-components";
import CorpsModaleConfirmation from "./CorpsModaleConfirmation";
import TitreModaleConfirmation from "./TitreModaleConfirmation";

export interface EtapePourVousJoindreProps {
    readonly state: AuthentificationModelView;
    readonly controller: AuthentificationController;
}


export default function EtapePourVousJoindre({state, controller}: EtapePourVousJoindreProps) {
    return <>
        <BandeauModification dataSource={state.rendezVous}/>
        <PourVousJoindre dataSource={state.pourVousJoindre}
                         canalSelected={state.rendezVous.canalSelected}
                         onChoixPourVousJoindreSelected={controller.onChoixContactSelected}
                         onTelephonePourVousJoindreChanged={controller.onTelephonePourVousJoindreChanged}
                         onEmailPourVousJoindreChanged={controller.onEmailPourVousJoindreChanged}
                         onValidationRendezVous={controller.onCreationRendezVous}
                         infosModale={state.infosModale}
                         formError={state.formErrorPourVousJoindre}
                         formHasError={controller.verificationErreursPourVousJoindre}
        />
        <Modal
            show={state.afficherModaleConfirmation}
            centered
            backdrop="static"
        >
            <Modal.Header closeButton/>

            <Modal.Body>
                <>
                    <span className={`icon icon-macif-mobile-cercle-check mcf-text--success icon-title`}/>
                    <Modal.Title><TitreModaleConfirmation canalSelected={state.rendezVous.canalSelected}/></Modal.Title>
                    <CorpsModaleConfirmation canalSelected={state.rendezVous.canalSelected}/>
                </>
            </Modal.Body>

            <Modal.Footer>
                <Button
                    variant="primary"
                    href="/">
                    Accéder à mon espace client
                </Button>
            </Modal.Footer>
        </Modal>

        {/*<Modal*/}
        {/*    show={showModaComptedejaexistant}*/}
        {/*    onHide={() => setShow(false)}*/}
        {/*    centered*/}
        {/*    backdrop="static"*/}
        {/*>*/}
        {/*    <Modal.Header closeButton/>*/}

        {/*    <Modal.Body>*/}
        {/*        <>*/}
        {/*            <span className={`icon ${classIcon} icon-title`}/>*/}
        {/*            <Modal.Title>{title}</Modal.Title>*/}
        {/*            <p>{children}</p>*/}
        {/*        </>*/}
        {/*    </Modal.Body>*/}

        {/*    <Modal.Footer>*/}
        {/*        {cancelTextButton && onCancel &&*/}
        {/*            <Button variant="outline--primary" onClick={() => onCancel()}>*/}
        {/*                {cancelTextButton}*/}
        {/*            </Button>}*/}

        {/*        <Button*/}
        {/*            variant="primary"*/}
        {/*            onClick={() => onValidate()}>*/}
        {/*            {validateTextButton}*/}
        {/*        </Button>*/}
        {/*    </Modal.Footer>*/}
        {/*</Modal>*/}

        {/*    state.infosModale.showModal && <ModalComponent showModal={state.infosModale.showModal}*/}
        {/*                                                   classIcon="icon-bonhomme-sourire"*/}
        {/*                                                   title="Un compte existe déjà avec cet identifiant"*/}
        {/*                                                   validateTextButton="Connexion"*/}
        {/*                                                   onValidate={() => window.alert("ALLLOOOO")}>*/}
        {/*    <>*/}
        {/*        <p>- Vous recevrez par e-mail A ANONYMISER les informations et le lien du rendez-vous en visioconférence.</p>*/}
        {/*        <p>- Votre espace client sera créé pour gérer votre rendez-vous (un mot de passe temporaire sera envoyé par e-mail).</p>*/}
        {/*    </>*/}
        {/*</ModalComponent>;*/}
    </>;
}