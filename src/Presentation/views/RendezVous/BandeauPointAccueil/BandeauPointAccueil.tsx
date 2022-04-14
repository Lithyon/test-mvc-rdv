import { Card, Col } from "macif-components";
import Image from "../../../components/Image";
import { useOneWayBinding } from "../../../hooks/useBinding";
import useInit from "../../../hooks/useInit";
import BandeauPointAccueilViewModel from "./BandeauPointAccueilViewModel";

interface BandeauPointAccueilProps {
  readonly dataContext: BandeauPointAccueilViewModel;
}

export default function BandeauPointAccueil({
  dataContext,
}: BandeauPointAccueilProps) {
  useInit(dataContext);

  const nomPointAccueil = useOneWayBinding<string>({
    dataContext,
    propertyName: "nomPointAccueil",
  });

  const noVoie = useOneWayBinding<string>({
    dataContext,
    propertyName: "noVoie",
  });

  const typeVoie = useOneWayBinding<string>({
    dataContext,
    propertyName: "typeVoie",
  });

  const nomVoie = useOneWayBinding<string>({
    dataContext,
    propertyName: "nomVoie",
  });

  const codePostal = useOneWayBinding<string>({
    dataContext,
    propertyName: "codePostal",
  });

  const commune = useOneWayBinding<string>({
    dataContext,
    propertyName: "commune",
  });

  const telPointAccueil = useOneWayBinding<string>({
    dataContext,
    propertyName: "telPointAccueil",
  });

  const urlPointAccueil = useOneWayBinding<string>({
    dataContext,
    propertyName: "urlPointAccueil",
  });

  const srcImgPointAccueil = useOneWayBinding<string>({
    dataContext,
    propertyName: "srcImgPointAccueil",
  });

  return (
    <Card bg="gris-sable" className="mcf-d--none mcf-d-md--flex mcf-flex--row">
      <Card.Body className="mcf-d--flex mcf-align-items--center">
        <div className="mcf-text--center mcf-w--50">
          <i className="icon-localisation mcf-icon--5" />
          <Card.Text className="mcf-h4 mcf-mt--5">Agence choisie</Card.Text>
        </div>
        <address className="mcf-d--flex mcf-flex--column mcf-w--50">
          <span>{nomPointAccueil}</span>
          <p>
            {noVoie} {typeVoie} {nomVoie}{" "}
          </p>
          <p>
            {codePostal} {commune}
          </p>
          <a
            href={`tel:${telPointAccueil}`}
            className="mcf-text--big-3 mcf-font-weight--bold mcf-text--body"
          >
            {telPointAccueil}
          </a>
          <a href={urlPointAccueil}>En savoir plus</a>
        </address>
      </Card.Body>
      <Col md={4} className="mcf-px--0">
        <Image srcImage={srcImgPointAccueil} />
      </Col>
    </Card>
  );
}
