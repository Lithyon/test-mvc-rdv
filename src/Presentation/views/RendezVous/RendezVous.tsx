import { Card, Col, Container, Row } from "macif-components";
import BandeauPointAccueil from "./BandeauPointAccueil";

export default function RendezVous() {
  return (
    <Container>
      <Row>
        <Col>
          <Card body>
            <BandeauPointAccueil />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
