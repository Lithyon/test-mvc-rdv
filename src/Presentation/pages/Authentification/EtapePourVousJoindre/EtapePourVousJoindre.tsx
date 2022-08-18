import BandeauModification from "../BandeauModification";
import PourVousJoindre from "../PourVousJoindre";
import React from "react";
import {Button, Modal} from "macif-components";
import CorpsModaleConfirmation from "./CorpsModaleConfirmation";
import TitreModaleConfirmation from "./TitreModaleConfirmation";
import {PourVousJoindreModelView} from "../ModelView/PourVousJoindre/PourVousJoindreModelView";
import CanalModelView from "../../RendezVous/ModelView/Canal/CanalModelView";
import {ChoixContactModelView} from "../ModelView/PourVousJoindre/ChoixContactModelView";
import FormErrorPourVousJoindreModelView from "../ModelView/FormError/FormErrorPourVousJoindreModelView";
import RendezVousSelectionModelView from "../../RendezVous/ModelView/RendezVous/RendezVousSelectionModelView";

export interface EtapePourVousJoindreProps {
    readonly rendezVous: RendezVousSelectionModelView;
    readonly pourVousJoindre: PourVousJoindreModelView;
    readonly canalSelected: CanalModelView;
    readonly onChoixContactSelected: (value: ChoixContactModelView) => void;
    readonly onTelephonePourVousJoindreChanged: Function;
    readonly onEmailPourVousJoindreChanged: Function;
    readonly onCreationRendezVous: Function;
    readonly formErrorPourVousJoindre: FormErrorPourVousJoindreModelView;
    readonly verificationErreursPourVousJoindre: Function;
    readonly afficherModaleConfirmation: boolean;
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
                                                 verificationErreursPourVousJoindre,
                                                 afficherModaleConfirmation
                                             }: EtapePourVousJoindreProps) {

    return <>
        <BandeauModification dataSource={rendezVous}/>
        <PourVousJoindre dataSource={pourVousJoindre}
                         canalSelected={canalSelected}
                         onChoixContactSelected={onChoixContactSelected}
                         onTelephonePourVousJoindreChanged={onTelephonePourVousJoindreChanged}
                         onEmailPourVousJoindreChanged={onEmailPourVousJoindreChanged}
                         onValidationRendezVous={onCreationRendezVous}
                         formError={formErrorPourVousJoindre}
                         verificationErreursPourVousJoindre={verificationErreursPourVousJoindre}
        />
        <Modal
            show={afficherModaleConfirmation}
            centered
            backdrop="static"
        >
            <Modal.Header closeButton/>

            <Modal.Body>
                <>
                    <span className={`icon icon-macif-mobile-cercle-check mcf-text--success icon-title`}/>
                    <Modal.Title><TitreModaleConfirmation canalSelected={canalSelected}/></Modal.Title>
                    <CorpsModaleConfirmation canalSelected={canalSelected}/>
                </>
            </Modal.Body>

            <Modal.Footer>
                <Button
                    variant="primary"
                    href="/assurance/particuliers/vos-espaces-macif/espace-assurance">
                    Accéder à mon espace client
                </Button>
            </Modal.Footer>
        </Modal>
    </>;
}