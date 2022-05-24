import {Button, ButtonGroup, Form} from "macif-components";
import {useNavigate} from "react-router-dom";
import PagesDetails from "../../PagesDetails";
import RendezVousModelView from "../ModelView/RendezVous/RendezVousModelView";

export interface ConnexionProps {
    readonly dataSource: RendezVousModelView;
}

export default function Connexion({dataSource}: ConnexionProps) {
    const navigate = useNavigate()
    return (
        <>
            <h3>Vos informations</h3>
            <Form.Group controlId={"connexion"}>
                <Form.Label required>
                    Pour confirmer votre rendez-vous, nous avons besoin de vous identifier. Avez-vous un espace client ?
                </Form.Label>
                <ButtonGroup gutter="2" className="mcf-mt--3">
                    <Button variant="switcher" onClick={() => navigate(PagesDetails.Auth.link, {state: dataSource})}>
                        Oui, j'ai un espace et je me connecte
                    </Button>
                    <Button variant="switcher" onClick={() => navigate(PagesDetails.Auth.link, {state: dataSource})}>
                        Non je n'ai pas d'espace, je poursuis le formulaire
                    </Button>
                </ButtonGroup>
            </Form.Group>
        </>
    );
}