import {Alert, Button, Row} from "macif-components";
import React from "react";

export default function AssurancePro() {
    return <Alert variant="primary">
        <span className="icon icon-macif-mobile-info-plein mcf-icon--3 mcf-float--left"></span>
        <Row>
            <p>
                Ce cas nécessite une prise en charge particulière. Aussi, nous vous invitons à remplir un nouveau formulaire. Un chargé de
                clientèle spécialisé se déplacera sur votre lieu de travail afin d’évaluer avec vous les meilleures solutions d’assurance pour
                votre activité.
            </p>
        </Row>
        <Button href="/assurance/professionnels-et-entreprises/demande-de-rendez-vous-pour-les-professionnels-et-les-entreprises"
                variant="light">
            Demander mon rendez-vous Pro
        </Button>
    </Alert>;
}
