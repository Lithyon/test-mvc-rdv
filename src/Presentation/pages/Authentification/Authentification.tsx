import {Button, Card, Col, Container, Row} from "macif-components";
import {useNavigate} from "react-router-dom";
import PagesDetails from "../PagesDetails";

export default function Authentification() {
    const navigate = useNavigate();
    return <Container className="mcf-mt--10">
        <Row>
            <Col>
                <Card body>
                    Coucou
                    <Button onClick={() => navigate(PagesDetails.RendezVous.link)}>Previous</Button>
                </Card>
            </Col>
        </Row>
    </Container>
}