
import {Button, Card} from "macif-components";
import RendezVousSelectionModelView from "../../RendezVous/ModelView/RendezVous/RendezVousSelectionModelView";

export interface BandeauModificationProps {
    readonly dataSource: RendezVousSelectionModelView;
}

export default function BandeauModification({dataSource}: BandeauModificationProps) {
    return <Card bg="gris-sable">
        <Card.Body className="mcf-d-md--flex mcf-align-items--center mcf-justify-content--between">
            <span className="icon icon-calendrier-check mcf-icon--6 mcf-pb-lg--0 mcf-pr-md--3" aria-hidden={true}/>

            <div>
                Je souhaite un rendez-vous {dataSource.canalSelected.libelle.toLowerCase()} le
                {" "}<span className="mcf-font-weight--bold">{dataSource.jour.toLocaleDateString('fr-FR', {
                        weekday: "long",
                        day: "numeric",
                        month: "short"
                    })}</span>
                {" "}à {dataSource.heure.libelle} à l'agence de {dataSource.nmCommu}.
                {" "}Ma demande concerne {dataSource.demandeSelected.libelle.toLowerCase()} pour le domaine {dataSource.domaineSelected.libelle.toLowerCase()}.
            </div>

            <Button variant="outline--primary mcf-d--flex mcf-d-md--none mcf-w--100 mcf-justify-content--center">
                <span className="icon icon-macif-mobile-crayon mcf-icon--left mcf-pr--2" aria-hidden={true}/>
                Modifier
            </Button>
            <Button variant="outline--primary mcf-d--none mcf-d-md--flex">
                <span className="icon icon-macif-mobile-crayon mcf-icon--left mcf-pr--2" aria-hidden={true}/>
                Modifier
            </Button>
        </Card.Body>
    </Card>;
}