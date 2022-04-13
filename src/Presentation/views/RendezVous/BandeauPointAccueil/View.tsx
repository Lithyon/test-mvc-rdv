import { Card, Col } from "macif-components";
import { PointAccueil } from "../../../../Domain/Model/PointAccueil";
import Image from "../../../components/Image";
import { useOneWayBinding } from "../../../hooks/useBinding";
import useInit from "../../../hooks/useInit";
import BandeauPointAcceuilViewModel from "./ViewModel";

interface BandeauPointAcceuilProps {
  readonly dataContext: BandeauPointAcceuilViewModel;
}

export default function BandeauPointAccueil({
  dataContext,
}: BandeauPointAcceuilProps) {
  useInit(dataContext);

  const pointAccueil = useOneWayBinding<PointAccueil>({
    dataContext,
    propertyName: "pointAccueil",
  });

  console.log(pointAccueil);

  return pointAccueil ? (
    <Card bg="gris-sable" className="mcf-d--none mcf-d-md--flex mcf-flex--row">
      <Card.Body className="mcf-d--flex mcf-align-items--center">
        <div className="mcf-text--center mcf-w--50">
          <i className="icon-localisation mcf-icon--5" />
          <Card.Text className="mcf-h4 mcf-mt--5">Agence choisie</Card.Text>
        </div>
        <address className="mcf-d--flex mcf-flex--column mcf-w--50">
          <span>{pointAccueil.nomPointAccueil}</span>
          <p>
            {pointAccueil.adressePointAccueil.noVoie}{" "}
            {pointAccueil.adressePointAccueil.typeVoie}{" "}
            {pointAccueil.adressePointAccueil.nomVoie}{" "}
          </p>
          <p>
            {pointAccueil.adressePointAccueil.codePostal}{" "}
            {pointAccueil.adressePointAccueil.commune}
          </p>
          <a
            href={`tel:${pointAccueil.telPointAccueil}`}
            className="mcf-text--big-3 mcf-font-weight--bold mcf-text--body"
          >
            {pointAccueil.telPointAccueil}
          </a>
          <a href={pointAccueil.urlPointAccueil}>En savoir plus</a>
        </address>
      </Card.Body>
      <Col md={4} className="mcf-px--0">
        <Image srcImage={pointAccueil.srcImgPointAccueil} />
      </Col>
    </Card>
  ) : (
    <div>Coucou</div>
  );
}
