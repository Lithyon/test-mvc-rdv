import {Button, Modal} from "macif-components";
import React from "react";

export interface ModaleModificationEmailProps {
    readonly show: boolean;
    readonly onAfficherModaleModificationEmail: Function
    readonly onCreationCompte: Function
    readonly email: string;
}

export default function ModaleModificationEmail({
                                                    show,
                                                    onAfficherModaleModificationEmail,
                                                    onCreationCompte,
                                                    email,
                                                }: ModaleModificationEmailProps) {
    const gestionFermetureConfirmationEmail = () => onAfficherModaleModificationEmail(false);
    const gestionCreationCompte = () => {
        onCreationCompte();
        onAfficherModaleModificationEmail(false);
    };

    function emailAnonymise() {
        return email.replace(
            /(\w{3})[\w.-]+@([\w.]+\w)/,
            "$1***@$2"
        );
    }

    return <Modal
        show={show}
        centered
        onHide={gestionFermetureConfirmationEmail}
    >
        <Modal.Header closeButton/>
        <Modal.Body>
            <>
                <span className="icon icon-macif-mobile-enveloppe icon-title"/>
                <Modal.Title className="mcf-text--big-3 mcf-font--bold">Confirmer votre rendez-vous ?</Modal.Title>
                <p>Vous recevrez les informations et le lien du rendez-vous en visioconférence à l'adresse mail {emailAnonymise()}.</p>
                <p>
                    Votre espace client sera créé pour gérer votre rendez-vous (votre mot de passe temporaire sera envoyé par e-mail).
                </p>
            </>
        </Modal.Body>

        <Modal.Footer className="mcf-justify-content--around">
            <Button
                variant="outline--primary"
                onClick={gestionFermetureConfirmationEmail}>
                Modifier mon e-mail
            </Button>

            <Button
                variant="primary"
                onClick={gestionCreationCompte}>
                Confirmer
            </Button>
        </Modal.Footer>
    </Modal>;
}
