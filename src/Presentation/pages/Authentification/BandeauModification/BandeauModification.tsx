import {Button, Card} from "macif-components";
import {useLocation, useNavigate} from "react-router-dom";
import PagesDetails from "../../PagesDetails";
import RendezVousModelView from "../../RendezVous/ModelView/RendezVous/RendezVousModelView";
import RendezVousSelectionModelView from "../../RendezVous/ModelView/RendezVous/RendezVousSelectionModelView";
import {ParametresUrl} from "../../../../Domain/Data/Enum/ParametresUrl";

export interface BandeauModificationProps {
    readonly dataSource: RendezVousSelectionModelView;
}

export default function BandeauModification({dataSource}: BandeauModificationProps) {
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state as RendezVousModelView;

    return <Card bg="gris-clair-de-lune">
        <Card.Body className="mcf-grid mcf-align-items--center">
            <span className="icon icon-calendrier-check mcf-icon--6 mcf-d--none mcf-d-md--flex mcf-g-col-1" aria-hidden={true}/>

            <p className="mcf-g-col-12 mcf-g-col-md-10 mcf-mb--0">
                Je souhaite un rendez-vous {dataSource.canalSelected.libelle.toLowerCase()} le
                {" "}<span className="mcf-font-weight--bold">{dataSource.jour.toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric"
            })}</span>
                {" "}à {dataSource.heure.libelle} à l'agence de {dataSource.nmCommu}.
                {" "}Ma demande concerne {dataSource.demandeSelected.libelle.toLowerCase()} pour le
                domaine {dataSource.domaineSelected.libelle.toLowerCase()}.
            </p>

            <div className="mcf-g-col-12 mcf-g-col-md-1">
                <Button variant="outline--primary" className="mcf-d--flex mcf-justify-content--center" block
                        onClick={() => {
                            const searchParams = new URLSearchParams(window.location.search);
                            searchParams.set(ParametresUrl.BUREAU, dataSource.cdBuro);
                            searchParams.set(ParametresUrl.DOMAINE, dataSource.domaineSelected.code);
                            searchParams.set(ParametresUrl.DEMANDE, dataSource.demandeSelected.code);

                            navigate(PagesDetails.RendezVous.link + `?${searchParams.toString()}${ParametresUrl.TAG_MODIFICATION}`, {state});
                        }}>
                    <span className="icon icon-macif-mobile-crayon mcf-icon--left mcf-pr--2" aria-hidden={true}/>
                    Modifier
                </Button>
            </div>
        </Card.Body>
    </Card>;
}
