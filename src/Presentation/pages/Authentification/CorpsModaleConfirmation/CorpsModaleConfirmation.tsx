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
            return <p>Retrouvez la confirmation du rendez-vous dans la messagerie de votre espace perso</p>;
        case CanalCode.VISIO:
            return <p>
                Vous allez recevoir un e-mail <span className="mcf-font-weight--bold"> lien de connexion à votre visioconférence.</span>
                Vous pouvez consulter et modifier votre rendez-vous depuis votre espace client.
            </p>;
        default:
            return <></>;
    }
}
