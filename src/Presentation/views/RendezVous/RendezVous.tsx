import { Card, Col, Container, Row } from "macif-components";
import BandeauPointAccueil from "./BandeauPointAccueil";
import PriseRendezVous from "./PriseRendezVous";

export default function RendezVous() {
  return (
    <Container>
      <Row>
        <Col>
          <Card body>
            <BandeauPointAccueil />
            <PriseRendezVous />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
