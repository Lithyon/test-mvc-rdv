import {CanalCode} from "../../../../Domain/Data/Enum/Canal";
import React from "react";
import CanalModelView from "../../RendezVous/ModelView/Canal/CanalModelView";

export interface CorpsModaleConfirmationProps {
    canalSelected: CanalModelView;
}

export default function CorpsModaleConfirmation({canalSelected}: CorpsModaleConfirmationProps) {
    switch (canalSelected.code) {
        case CanalCode.AGENCE:
        case CanalCode.TELEPHONE:
            return <p>Retrouvez votre rendez-vous dans votre espace personnel.</p>;
        case CanalCode.VISIO:
            return <p>
                Vous allez recevoir un e-mail avec le <span className="mcf-font-weight--bold">lien de connexion à votre visioconférence.</span>
                Vous pouvez consulter et modifier votre rendez-vous depuis votre espace personnel.
            </p>;
        default:
            return <></>;
    }
}
