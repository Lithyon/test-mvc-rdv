import React from "react";
import {Alert, Button, Row} from "macif-components";

export default function Sinistre() {
    return <Alert variant="primary">
        <span className="icon icon-macif-mobile-info-plein mcf-icon--3 mcf-float--left"></span>
        <Row>
            <p>
                La prise de rendez-vous en agence pour un sinistre n'est pas possible. Nous vous invitons à nous contacter par téléphone au
                09 69 39 49 49, nos conseillers sont disponibles du lundi au vendredi de 8h à 20h et le samedi de 9h à 17h. Si vous souhaitez
                déclarer un sinistre habitation, un accident automobile, la procédure peut se faire également en ligne.
            </p>
        </Row>
        <Button href="/assurance/particuliers" variant="light">
            Déclarez votre sinistre en ligne
        </Button>
    </Alert>;
}
