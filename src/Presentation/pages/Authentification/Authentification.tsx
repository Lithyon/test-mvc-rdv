import {Button, Card, Col, Container, Row} from "macif-components";
import {useLocation, useNavigate} from "react-router-dom";
import PagesDetails from "../PagesDetails";
import RendezVousModelView from "../RendezVous/ModelView/RendezVous/RendezVousModelView";
import AuthentificationController from "./AuthentificationController";
import BandeauModification from "./BandeauModification/BandeauModification";

interface AuthentificationProps {
    readonly controller: AuthentificationController;
}

export default function Authentification({controller}: AuthentificationProps) {
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state as RendezVousModelView;
    return <Container className="mcf-mt--10">
        <Row>
            <Col>
                <BandeauModification dataSource={controller.state.rendezVous} />
                <Card body>
                    <Button onClick={() => navigate(PagesDetails.RendezVous.link + `?b=${state.rendezVous.cdBuro}`, {state})}>Previous</Button>
                    {/* <pre><code>{JSON.stringify(state.rendezVous, null, 4)}</code></pre> */}
                </Card>
            </Col>
        </Row>
    </Container>
}