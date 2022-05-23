import {Button, ButtonGroup, Form} from "macif-components";

export default function Connexion() {
    return (
        <>
            <h3>Vos informations</h3>
            <Form.Group controlId={"connexion"}>
                <Form.Label required>Pour confirmer votre rendez-vous, nous avons besoin de vous identifier. Avez-vous un espace client
                    ?</Form.Label>
                // FIXME: ne pas laisser les URL youtube
                <ButtonGroup gutter="2" className="mcf-mt--3">
                    <Button variant="switcher" href="https://www.youtube.com/watch?v=EpzADbkIyXw">Oui, j'ai un espace et je me connecte</Button>
                    <Button variant="switcher" href="https://www.youtube.com/watch?v=EpzADbkIyXw">Non je n'ai pas d'espace, je poursuis le
                        formulaire</Button>
                </ButtonGroup>
            </Form.Group>
        </>
    );
}