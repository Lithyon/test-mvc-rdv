import { Card, Col } from "macif-components";
import { useEffect } from "react";
import Image from "../../../components/Image";
import useViewModel from "./ViewModel";

export default function BandeauAgence() {
  const cdBuro = "7901";
  const { agence, getAgence } = useViewModel();

  useEffect(() => {
    getAgence(cdBuro);
  }, [cdBuro]);

  return (
    <Card bg="gris-sable" className="mcf-d--none mcf-d-md--flex mcf-flex--row">
      <Card.Body className="mcf-d--flex mcf-align-items--center">
        <div className="mcf-text--center mcf-w--50">
          <i className="icon-localisation mcf-icon--5" />
          <Card.Text className="mcf-h4 mcf-mt--5">Agence choisie</Card.Text>
        </div>
        <address className="mcf-d--flex mcf-flex--column mcf-w--50">
          <span>{agence.nomAgence}</span>
          <p>
            {agence.adresseAgence.noVoie} {agence.adresseAgence.typeVoie}{" "}
            {agence.adresseAgence.nomVoie}{" "}
          </p>
          <p>
            {agence.adresseAgence.codePostal} {agence.adresseAgence.commune}
          </p>
          <a
            href={`tel:${agence.telAgence}`}
            className="mcf-text--big-3 mcf-font-weight--bold mcf-text--body"
          >
            {agence.telAgence}
          </a>
          <a href={agence.urlAgence}>En savoir plus</a>
        </address>
      </Card.Body>
      <Col md={4} className="mcf-px--0">
        <Image srcImage={agence.srcImgAgence} />
      </Col>
    </Card>
  );
}
