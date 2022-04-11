import { Card, Col, Container, Row } from "macif-components";
import BandeauAgence from "./BandeauAgence";

export default function RendezVous() {
  return (
  <Container>
    <Row>
      <Col>
        <Card body>
          <BandeauAgence />
        </Card>
      </Col>
    </Row>
  </Container>);
}
