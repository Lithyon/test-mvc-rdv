import {Button, Form} from "macif-components";
import {DisponibilitesModelView} from "../ModelView/Disponibilites/DisponibilitesModelView";
import {useEffect, useState} from "react";
import { add, sub, isBefore, isAfter } from 'date-fns';

export interface AgendaProps {
    readonly choiceSelected: Date,
    readonly onChoiceSelected: Function,
    readonly dataSource: DisponibilitesModelView,
    readonly onClick: Function
}

export default function Agenda({choiceSelected, onChoiceSelected, dataSource, onClick}: AgendaProps) {
    const {disponibilites, aucuneDisponibilite} = dataSource;

    const [datePrev, setDatePrev] = useState(new Date());
    const [dateNext, setDateNext] = useState(new Date());
    const [disabledPrev, setDisabledPrev] = useState(true);
    const [disabledNext, setDisabledNext] = useState(true);

    useEffect(() => {
        if (disponibilites.length > 0) {
            const dtJour = new Date();
            const dispoDebut = sub(new Date(disponibilites[0].jour), { days: 6})
            const dispoFin = new Date(disponibilites[disponibilites.length - 1].jour);
            const dtMax = add(dtJour, {months: 3});

            setDatePrev(dispoDebut);
            setDisabledPrev(isBefore(dispoDebut, dtJour))

            setDateNext(dispoFin)
            setDisabledNext(isAfter(dispoFin, dtMax))
        }
    }, [disponibilites])

    const handleClickPrev = () => {
        onClick(datePrev);
    }

    const handleClickNext = () => {
        onClick(dateNext);
    }

    return <Form.Group controlId="jour">
        <Form.Label>Choisissez la date de votre rendez-vous</Form.Label>
        <div className="mcf-d--flex mcf-align-items--center mcf-mt--2">
            <Button className="mcf-btn--icon" variant="outline--primary" onClick={handleClickPrev}
                    disabled={disabledPrev}>
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
            <Button className="mcf-btn--icon" variant="outline--primary" onClick={handleClickNext} disabled={disabledNext}>
                <i className="icon-fleche-droite"/>
            </Button>
        </div>
    </Form.Group>;
}