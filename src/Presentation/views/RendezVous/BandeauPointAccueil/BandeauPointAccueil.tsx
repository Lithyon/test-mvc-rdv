import { Card, Col } from "macif-components";
import Image from "../../../components/Image";
import useAttachController from "../../../hooks/useAttachController";
import useInitContexte from "../../../hooks/useInitContexte";
import BandeauPointAccueilController from "./BandeauPointAccueilController";

interface BandeauPointAccueilProps {
  readonly controller: BandeauPointAccueilController;
}

export default function BandeauPointAccueil({
  controller,
}: BandeauPointAccueilProps) {
  const state = useAttachController(controller);

  useInitContexte(controller);

  return (
    <Card bg="gris-sable" className="mcf-d--none mcf-d-md--flex mcf-flex--row">
      <Card.Body className="mcf-d--flex mcf-align-items--center">
        <div className="mcf-text--center mcf-w--50">
          <i className="icon-localisation mcf-icon--5" />
          <Card.Text className="mcf-h4 mcf-mt--5">Agence choisie</Card.Text>
        </div>
        <address className="mcf-d--flex mcf-flex--column mcf-w--50">
          <span>{state.nomPointAccueil}</span>
          <p>
            {state.noVoie} {state.typeVoie} {state.nomVoie}{" "}
          </p>
          <p>
            {state.codePostal} {state.commune}
          </p>
          <a
            href={`tel:${state.telPointAccueil}`}
            className="mcf-text--big-3 mcf-font-weight--bold mcf-text--body"
          >
            {state.telPointAccueil}
          </a>
          <a href={state.urlPointAccueil}>En savoir plus</a>
        </address>
      </Card.Body>
      <Col md={4} className="mcf-px--0">
        <Image srcImage={state.srcImgPointAccueil} />
      </Col>
    </Card>
  );
}
