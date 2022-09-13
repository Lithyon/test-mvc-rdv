import {Button, Form, Loader} from "macif-components";
import {DisponibilitesModelView} from "../ModelView/Disponibilites/DisponibilitesModelView";
import React, {useEffect, useMemo, useRef, useState} from "react";
import {add, isAfter, isBefore, sub} from "date-fns";
import ErrorIsTriggered from "../../../commons/ErrorEvent/ErrorIsTriggered";
import useErrorObservable from "../../../hooks/useErrorObservable";
import {ErrorObservable} from "../../../commons/ErrorObservable";
import DisplayError from "../../../components/DisplayError";

export interface JourSwitcherProps {
    readonly choiceSelected: Date,
    readonly onChoiceSelected: (value: Date) => void,
    readonly dataSource: DisponibilitesModelView,
    readonly onClick: Function,
    readonly isOver: boolean,
    readonly hasErrorDisponibilitesObserver: ErrorObservable
}

export default function JourSwitcher({
                                         choiceSelected,
                                         onChoiceSelected,
                                         dataSource,
                                         onClick,
                                         isOver,
                                         hasErrorDisponibilitesObserver
                                     }: JourSwitcherProps) {
    const jourSwitcherRef = useRef<HTMLDivElement>(null);
    const {disponibilites} = dataSource;

    const [datePrev, setDatePrev] = useState(new Date());
    const [dateNext, setDateNext] = useState(new Date());
    const [disabledPrev, setDisabledPrev] = useState(true);
    const [disabledNext, setDisabledNext] = useState(true);
    const [dejaNavigue, setDejaNavigue] = useState(false);

    const {hasError}: ErrorIsTriggered = useErrorObservable(hasErrorDisponibilitesObserver);

    const tableauRefInput: Array<React.RefObject<HTMLLabelElement>> = useMemo(() => disponibilites.map(
        () => React.createRef<HTMLLabelElement>()), [disponibilites]
    );

    useEffect(() => {
        jourSwitcherRef.current?.scrollIntoView({behavior: "smooth", block: "center"});
    }, [choiceSelected]);

    useEffect(() => {
        if (disponibilites.length > 0) {
            const dtJour = new Date();
            dtJour.setHours(0, 0, 0, 0);
            const dispoDebut = sub(new Date(disponibilites[0].jour), {days: 7});
            const dispoFin = add(new Date(disponibilites[disponibilites.length - 1].jour), {days: 1});
            const dtMax = add(dtJour, {months: 3});

            setDatePrev(dispoDebut);
            setDisabledPrev(isBefore(dispoDebut, dtJour));

            setDateNext(dispoFin);
            setDisabledNext(isAfter(dispoFin, dtMax));

            if (dejaNavigue) {
                tableauRefInput[0].current?.focus();
            }
        }
    }, [disponibilites, dejaNavigue, tableauRefInput]);


    const handleClickPrev = () => {
        setDejaNavigue(true);
        onClick(datePrev);
    };

    const handleClickNext = () => {
        setDejaNavigue(true);
        onClick(dateNext);
    };

    if (hasError) {
        return <DisplayError/>;
    }

    return <Form.Group controlId="jour" ref={jourSwitcherRef}>
        <Form.Label as="h3" id="carouselDate" className="mcf-text--small-1">Choisissez la date de votre rendez-vous</Form.Label>
        <div className="mcf-d--flex mcf-align-items--center mcf-mt--2">
            <Button icon="icon-fleche_gauche" variant="outline--primary" onClick={handleClickPrev}
                    disabled={disabledPrev} aria-disabled={disabledPrev} aria-label="Semaine précédente">
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
                    const disabled = value.ferie || (value.disponibilitesMatin.length === 0 && value.disponibilitesApresMidi.length === 0);
                    return (
                        <Form.Switcher ref={tableauRefInput[index]} key={index} value={value.jour} disabled={disabled} aria-disabled={disabled}
                                       id={value.jour.toString().replace(/\s+/g, "")} className="mcf-btn--switcher--outline">
                            {value.jour.toLocaleDateString("fr-FR", {
                                weekday: "short",
                                day: "numeric",
                                month: "short"
                            })}
                        </Form.Switcher>
                    );
                })}
            </Form.SwitcherGroup> : <Loader ball className="mcf-mx--auto"/>}
            <Button icon="icon-fleche-droite" variant="outline--primary" onClick={handleClickNext}
                    disabled={disabledNext} aria-disabled={disabledNext} aria-label="Semaine suivante">
            </Button>
        </div>
    </Form.Group>;
}
