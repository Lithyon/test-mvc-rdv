import {Button, Form} from "macif-components";
import {DisponibilitesModelView} from "../ModelView/Disponibilites/DisponibilitesModelView";

export interface AgendaProps {
    readonly choiceSelected: Date,
    readonly onChoiceSelected: Function,
    readonly dataSource: DisponibilitesModelView
}

export default function Agenda({choiceSelected, onChoiceSelected, dataSource}: AgendaProps) {
    const {disponibilites, aucuneDisponibilite} = dataSource;
    return <Form.Group controlId="jour">
        <Form.Label>Choisissez la date de votre rendez-vous</Form.Label>
        <div className="mcf-d--flex mcf-align-items--center mcf-mt--2">
            <Button className="mcf-btn--icon" variant="outline--primary">
                <i className="icon-fleche_gauche"/>
            </Button>
            <Form.SwitcherGroup
                type="radio"
                nbSwitchers={6}
                name="jour"
                value={choiceSelected}
                onChange={onChoiceSelected}
                className="mcf-mx--2"
            >
                {disponibilites.map((value, index) => {
                    const disabled = value.ferie || (value.disponibilitesMatin.length === 0 && value.disponibilitesApresMidi.length === 0)
                    return (
                        <Form.Switcher key={index} value={value.jour} disabled={disabled}>
                            {value.jour.toLocaleDateString('fr-FR', {
                                weekday: "short",
                                day: "numeric",
                                month: "short"
                            })}
                        </Form.Switcher>
                    )
                })}
            </Form.SwitcherGroup>
            <Button className="mcf-btn--icon" variant="outline--primary">
                <i className="icon-fleche-droite"/>
            </Button>
        </div>
    </Form.Group>;
}