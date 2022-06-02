import {Card, Col} from "macif-components";
import Image from "../../../components/Image";
import BandeauPointAccueilModelView from "./ModelView/BandeauPointAccueilModelView";

export interface BandeauPointAccueilProps {
    readonly dataSource: BandeauPointAccueilModelView;
}

export default function BandeauPointAccueil({dataSource}: BandeauPointAccueilProps) {
    const {
        nomPointAccueil,
        noVoie,
        typeVoie,
        nomVoie,
        codePostal,
        commune,
        telPointAccueil,
        urlPointAccueil,
        srcImgPointAccueil,
    } = dataSource;

    return (
        <Card bg="gris-sable" className="mcf-d--none mcf-d-md--flex mcf-flex--row">
            <Card.Body className="mcf-d--flex mcf-align-items--center">
                <div className="mcf-text--center mcf-w--50">
                    <i className="icon-localisation mcf-icon--5"/>
                    <h2 className="mcf-h4 mcf-mt--5">Agence choisie</h2>
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
                <Image srcImage={srcImgPointAccueil}/>
            </Col>
        </Card>
    );
}
