import CanalModelView from "../../RendezVous/ModelView/Canal/CanalModelView";
import {Button, Modal} from "macif-components";
import TitreModaleConfirmation from "../TitreModaleConfirmation";
import CorpsModaleConfirmation from "../CorpsModaleConfirmation";
import React from "react";

export interface ModaleConfirmationProps {
    readonly show: boolean;
    readonly canalSelected: CanalModelView;
}

export default function ModaleConfirmation({
                                               show,
                                               canalSelected,
                                           }: ModaleConfirmationProps) {
    return <Modal
        show={show}
        centered
        backdrop="static"
    >
        <Modal.Header/>

        <Modal.Body>
            <>
                <span className="icon icon-macif-mobile-cercle-check mcf-text--success icon-title"/>
                <Modal.Title><TitreModaleConfirmation canalSelected={canalSelected}/></Modal.Title>
                <CorpsModaleConfirmation canalSelected={canalSelected}/>
            </>
        </Modal.Body>

        <Modal.Footer>
            <Button
                variant="primary"
                href="/assurance/particuliers/vos-espaces-macif/espace-assurance">
                Accéder à mon espace personnel
            </Button>
        </Modal.Footer>
    </Modal>;
}
