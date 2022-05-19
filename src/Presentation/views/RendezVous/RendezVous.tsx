import {Card, Col, Container, Row} from "macif-components";
import BandeauPointAccueil from "./BandeauPointAccueil";
import PriseRendezVous from "./PriseRendezVous";
import RendezVousController from "./RendezVousController";
import useAttachController from "../../hooks/useAttachController";
import useInitContexte from "../../hooks/useInitContexte";

interface RendezVousProps {
    readonly controller: RendezVousController;
}

export default function RendezVous({controller}: RendezVousProps) {
    const state = useAttachController(controller);

    useInitContexte(controller)
    return (
        <Container className="mcf-mt--10">
            <Row>
                <Col>
                    <Card body>
                        <BandeauPointAccueil dataSource={state.pointAccueil}/>
                        <PriseRendezVous dataSource={state.rendezVous}
                                         demandes={state.demandes}
                                         domaines={state.domaines}
                                         canal={state.canal}
                                         onDomaineSelected={controller.onDomaineSelected}
                                         onDemandeSelected={controller.onDemandeSelected}
                                         onCanalSelected={controller.onCanalSelected}
                                         onPrecisionChanged={controller.onPrecisionChanged}
                                         disponibilites={state.disponibilites}
                                         onJourSelected={controller.onJourSelected}
                                         loadDisponibilites={controller.loadDisponibilites}
                                         onHeureSelected={controller.onHeureSelected}/>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
