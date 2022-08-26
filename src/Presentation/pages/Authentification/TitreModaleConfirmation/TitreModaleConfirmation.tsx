import {CanalCode} from "../../../../Domain/Data/Enum/Canal";
import CanalModelView from "../../RendezVous/ModelView/Canal/CanalModelView";
import React from "react";

export interface TitreModaleConfirmationProps {
    readonly canalSelected: CanalModelView
}

export default function TitreModaleConfirmation({canalSelected}: TitreModaleConfirmationProps) {
    switch (canalSelected.code) {
        case CanalCode.AGENCE:
            return <>Votre rendez-vous en agence est confirmé</>;
        case CanalCode.TELEPHONE:
            return <>Votre rendez-vous téléphonique est confirmé</>;
        case CanalCode.VISIO:
            return <>Votre rendez-vous en visioconférence est confirmé</>;
        default:
            return <>Votre rendez-vous est confirmé</>;
    }
}
