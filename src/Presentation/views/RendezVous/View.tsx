import { Card, Col, Container, Row } from "macif-components";
import BandeauPointAccueil from "./BandeauPointAccueil";
import { RendezVousViewModel } from "./ViewModel";

interface RendezVousProps {
  dataContext: RendezVousViewModel;
}

export default function RendezVous({ dataContext }: RendezVousProps) {
  return (
    <Container>
      <Row>
        <Col>
          <Card body>
            <BandeauPointAccueil
              dataContext={dataContext.bandeauPointAccueilViewModel}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
