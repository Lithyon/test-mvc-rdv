import {ErrorObservable} from "../../../commons/ErrorObservable";
import ErrorIsTriggered from "../../../commons/ErrorEvent/ErrorIsTriggered";
import useErrorObservable from "../../../hooks/useErrorObservable";
import {Button, Modal} from "macif-components";
import React from "react";

export interface ModaleCompteExistantProps {
    readonly hasErrorDejaUnCompteObserver: ErrorObservable;
    readonly fermerCompteDejaExistantModale: Function;
    readonly redirectionMireDeConnexion: Function;
}

export default function ModaleCompteExistant({
                                                 hasErrorDejaUnCompteObserver,
                                                 fermerCompteDejaExistantModale,
                                                 redirectionMireDeConnexion,
                                             }: ModaleCompteExistantProps) {
    const {hasError}: ErrorIsTriggered = useErrorObservable(hasErrorDejaUnCompteObserver);
    const gestionConfirmation = () => redirectionMireDeConnexion("/assurance/particuliers/demande-de-rendez-vous");
    const gestionFermetureCompteExistant = () => fermerCompteDejaExistantModale();

    return <Modal
        show={hasError}
        centered
        onHide={gestionFermetureCompteExistant}
    >
        <Modal.Header closeButton/>

        <Modal.Body>
            <>
                <span className="icon icon-bonhomme-sourire icon-title"/>
                <Modal.Title className="mcf-text--big-3 mcf-font--bold">Un compte existe déjà avec cet identifiant</Modal.Title>
                <p>
                    Veuillez vous connecter ou choisir un autre e-mail
                    pour créer un nouveau compte.
                </p>
            </>
        </Modal.Body>

        <Modal.Footer>
            <Button
                variant="primary"
                onClick={gestionConfirmation}>
                Connexion
            </Button>
        </Modal.Footer>
    </Modal>;
}
