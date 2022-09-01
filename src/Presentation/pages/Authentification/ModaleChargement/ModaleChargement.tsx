import {Loader, Modal} from "macif-components";
import React from "react";

export interface ModaleChargementProps {
    readonly show: boolean;
}

export default function ModaleChargement({show}: ModaleChargementProps) {
    return <Modal
        show={show}
        centered
        backdrop="static"
    >
        <Modal.Header/>
        <Modal.Body className="mcf-px--8 mcf-py--7">
            <Loader ball className="mcf-mx--auto"/>
            <p className="mcf-h5 mcf-mt--5 mcf-mb--5">Un instant SVP...</p>
        </Modal.Body>
    </Modal>;
}
