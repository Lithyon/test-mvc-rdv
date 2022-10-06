import BandeauModification from "../BandeauModification";
import PourVousJoindre from "../PourVousJoindre";
import React from "react";
import {PourVousJoindreModelView} from "../ModelView/PourVousJoindre/PourVousJoindreModelView";
import CanalModelView from "../../RendezVous/ModelView/Canal/CanalModelView";
import {ChoixContactModelView} from "../ModelView/PourVousJoindre/ChoixContactModelView";
import FormErrorPourVousJoindreModelView from "../ModelView/FormError/FormErrorPourVousJoindreModelView";
import RendezVousSelectionModelView from "../../RendezVous/ModelView/RendezVous/RendezVousSelectionModelView";
import ModaleConfirmation from "../ModaleConfirmation";
import ModaleChargement from "../ModaleChargement/ModaleChargement";

export interface EtapePourVousJoindreProps {
    readonly rendezVous: RendezVousSelectionModelView;
    readonly pourVousJoindre: PourVousJoindreModelView;
    readonly canalSelected: CanalModelView;
    readonly onChoixContactSelected: (value: ChoixContactModelView) => void;
    readonly onTelephonePourVousJoindreChanged: Function;
    readonly onEmailPourVousJoindreChanged: Function;
    readonly onCreationRendezVous: Function;
    readonly formErrorPourVousJoindre: FormErrorPourVousJoindreModelView;
    readonly isAgenceVirtuelle: boolean;
    readonly afficherModaleConfirmation: boolean;
    readonly chargementCreationRendezVousConnecte: boolean;
}

export default function EtapePourVousJoindre({
                                                 rendezVous,
                                                 pourVousJoindre,
                                                 canalSelected,
                                                 onChoixContactSelected,
                                                 onTelephonePourVousJoindreChanged,
                                                 onEmailPourVousJoindreChanged,
                                                 onCreationRendezVous,
                                                 formErrorPourVousJoindre,
                                                 isAgenceVirtuelle,
                                                 afficherModaleConfirmation,
                                                 chargementCreationRendezVousConnecte
                                             }: EtapePourVousJoindreProps) {

    return <>
        <BandeauModification dataSource={rendezVous} isAgenceVirtuelle={isAgenceVirtuelle}/>
        <PourVousJoindre dataSource={pourVousJoindre}
                         canalSelected={canalSelected}
                         onChoixContactSelected={onChoixContactSelected}
                         onTelephonePourVousJoindreChanged={onTelephonePourVousJoindreChanged}
                         onEmailPourVousJoindreChanged={onEmailPourVousJoindreChanged}
                         onValidationRendezVous={onCreationRendezVous}
                         formError={formErrorPourVousJoindre}
        />
        <ModaleChargement show={chargementCreationRendezVousConnecte}/>
        <ModaleConfirmation show={afficherModaleConfirmation} canalSelected={canalSelected}/>
    </>;
}
