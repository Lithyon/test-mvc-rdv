import { Card, Col, Container, Row } from "macif-components";
import { useEffect } from "react";
import BandeauPointAccueil from "./BandeauPointAccueil";
import useViewModel from "./ViewModel";

export default function RendezVous() {
  const cdBuro = "7902";
  const { pointAccueil, getPointAccueil } = useViewModel();

  useEffect(() => {
    getPointAccueil(cdBuro);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cdBuro]);

  return (
    <Container>
      <Row>
        <Col>
          <Card body>
            {pointAccueil && <BandeauPointAccueil pointAccueil={pointAccueil} />}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
