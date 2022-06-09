import {Button, Form, Loader} from "macif-components";
import {DisponibilitesModelView} from "../ModelView/Disponibilites/DisponibilitesModelView";
import React, {useEffect, useState} from "react";
import {add, isAfter, isBefore, sub} from 'date-fns';
import {LoadingObservable} from "../../../commons/LoadingObservable";
import LoadWaitingIsOver from "../../../commons/LoadingEvent/LoadWaitingIsOver";
import useLoaderObservable from "../../../hooks/useLoaderObservable";
import ErrorIsTriggered from "../../../commons/ErrorEvent/ErrorIsTriggered";
import useErrorObservable from "../../../hooks/useErrorObservable";
import {ErrorObservable} from "../../../commons/ErrorObservable";
import DisplayError from "../../../components/DisplayError";

export interface JourSwitcherProps {
    readonly choiceSelected: Date,
    readonly onChoiceSelected: Function,
    readonly dataSource: DisponibilitesModelView,
    readonly onClick: Function,
    readonly onLoadDisponibilitesObserver: LoadingObservable,
    readonly hasErrorDisponibilitesObserver: ErrorObservable
}

export default function JourSwitcher({
                                         choiceSelected,
                                         onChoiceSelected,
                                         dataSource,
                                         onClick,
                                         onLoadDisponibilitesObserver,
                                         hasErrorDisponibilitesObserver
                                     }: JourSwitcherProps) {
    const {disponibilites} = dataSource;

    const [datePrev, setDatePrev] = useState(new Date());
    const [dateNext, setDateNext] = useState(new Date());
    const [disabledPrev, setDisabledPrev] = useState(true);
    const [disabledNext, setDisabledNext] = useState(true);
    const [dejaNavigue, setDejaNavigue] = useState(false);


    const {isOver}: LoadWaitingIsOver = useLoaderObservable(onLoadDisponibilitesObserver);
    const {hasError}: ErrorIsTriggered = useErrorObservable(hasErrorDisponibilitesObserver);

    const tableauRefInput: Array<React.RefObject<HTMLLabelElement>> = disponibilites.map(() => React.createRef<HTMLLabelElement>());

    useEffect(() => {
        if (disponibilites.length > 0) {
            const dtJour = new Date();
            const dispoDebut = sub(new Date(disponibilites[0].jour), {days: 6})
            const dispoFin = new Date(disponibilites[disponibilites.length - 1].jour);
            const dtMax = add(dtJour, {months: 3});

            setDatePrev(dispoDebut);
            setDisabledPrev(isBefore(dispoDebut, dtJour));

            setDateNext(dispoFin);
            setDisabledNext(isAfter(dispoFin, dtMax));

            if (dejaNavigue && tableauRefInput[0].current) {
                tableauRefInput[0].current.focus();
            }
        }
    }, [disponibilites])


    const handleClickPrev = () => {
        setDejaNavigue(true);
        onClick(datePrev);
    }

    const handleClickNext = () => {
        setDejaNavigue(true);
        onClick(dateNext);
    }

    if (hasError) {
        return <DisplayError/>
    }

    return <Form.Group controlId="jour">
        <Form.Label as={"h3"} id="carouselDate" className="mcf-text--small-1">Choisissez la date de votre rendez-vous</Form.Label>
        <div className="mcf-d--flex mcf-align-items--center mcf-mt--2">
            <Button className="mcf-btn--icon" variant="outline--primary" onClick={handleClickPrev}
                    disabled={disabledPrev} aria-disabled={disabledPrev} aria-label="Jours précédents">
                <i className="icon-fleche_gauche"/>
            </Button>
            {isOver ? <Form.SwitcherGroup
                type="radio"
                role="radiogroup"
                aria-labelledby="carouselDate"
                nbSwitchers={6}
                name="jour"
                value={choiceSelected}
                onChange={onChoiceSelected}
                className="mcf-mx--2"
            >
                {disponibilites.map((value, index) => {
                    const disabled = value.ferie || (value.disponibilitesMatin.length === 0 && value.disponibilitesApresMidi.length === 0)
                    return (
                        <Form.Switcher ref={tableauRefInput[index]} key={index} value={value.jour} disabled={disabled} aria-disabled={disabled}
                                       id={value.jour}>
                            {value.jour.toLocaleDateString('fr-FR', {
                                weekday: "short",
                                day: "numeric",
                                month: "short"
                            })}
                        </Form.Switcher>
                    )
                })}
            </Form.SwitcherGroup> : <Loader ball className="mcf-mx--auto"/>}
            <Button className="mcf-btn--icon" variant="outline--primary" onClick={handleClickNext}
                    disabled={disabledNext} aria-disabled={disabledNext} aria-label="Jours suivants">
                <i className="icon-fleche-droite"/>
            </Button>
        </div>
    </Form.Group>;
}
