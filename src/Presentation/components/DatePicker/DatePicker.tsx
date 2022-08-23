import React, {ChangeEvent, KeyboardEvent, useEffect, useRef, useState} from "react";
import {Button, Form, InputGroup} from "macif-components";
import Day from "./Day";
import {keyboardKeysEnum} from "./Enum/KeyboardKeysEnum";
import {getShortDays, MONTHS} from "./Constantes/DatePickerConstantes";
import {
    addDays,
    addMonths,
    addYears,
    format,
    isAfter,
    isBefore,
    isEqual,
    lastDayOfMonth,
    parse,
    setDate,
    setMonth,
    setYear,
    startOfMonth,
    subDays,
    subMonths
} from "date-fns";

export interface DatePickerProps {
    readonly id: string;
    readonly minDate: Date;
    readonly maxDate: Date;
    readonly label: string;
    readonly placeholder?: string;
    readonly errorMessage?: string;
    readonly md: number;
    readonly xs: number;
    readonly onChangeDate: Function;
}

function range(start: number, end: number): number[] {
    if (start === end) {
        return [start];
    }
    return [start, ...range(start + 1, end)];
}

export default function DatePicker({
                                       id,
                                       label,
                                       placeholder,
                                       errorMessage,
                                       minDate,
                                       maxDate,
                                       md,
                                       xs,
                                       onChangeDate
                                   }: DatePickerProps) {
    const datePickerRef = useRef<HTMLDivElement>(null);

    const [selectedMonthYear, setSelectedMonthYear] = useState(minDate);
    const [selectedDate, setSelectedDate] = useState("");
    const [focusDate, setFocusDate] = useState(selectedDate);
    const [focusChoiceDate, setFocusChoiceDate] = useState(false);
    const [firstDayOfMonth, setFirstDayOfMonth] = useState(1);
    const [showCalendar, setShowCalendar] = useState(false);
    const [disabledArrowLeft, setDisabledArrowLeft] = useState(false);
    const [disabledArrowRight, setDisabledArrowRight] = useState(false);

    useEffect(
        () => {
            setFirstDayOfMonth(startOfMonth(selectedMonthYear).getDay());

            if (minDate.getFullYear() === selectedMonthYear.getFullYear() && minDate.getMonth() === selectedMonthYear.getMonth()) {
                setDisabledArrowLeft(true);
            } else {
                setDisabledArrowLeft(false);
            }

            if (maxDate.getFullYear() === selectedMonthYear.getFullYear() && maxDate.getMonth() <= selectedMonthYear.getMonth()) {
                setDisabledArrowRight(true);
            } else {
                setDisabledArrowRight(false);
            }
        },
        [maxDate, minDate, selectedMonthYear]
    );

    const annees = range(minDate.getFullYear(), maxDate.getFullYear());
    const daysOfMonth = range(1, lastDayOfMonth(selectedMonthYear).getDate());
    const semaines = range(1, 6);
    const joursDeSemaine = range(1, 7);
    const shortDays = getShortDays();

    const nbCaractereJoursMois = 2;
    const nbCaractereAnnee = 4;
    const longueurDateMax = 8;
    let i = 0;
    let after = 0;

    function keyPressed(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key === keyboardKeysEnum.KEY_BACKSPACE || event.key === keyboardKeysEnum.KEY_DEL) {
            setSelectedDate("");
            onChangeDate(new Date(0));
        }
        if (event.key === keyboardKeysEnum.KEY_SPACE) {
            setShowCalendar(true);
        }
    }

    function onChangeText(event: ChangeEvent<HTMLInputElement>) {
        const dateStrippee = event.target.value.replace(/\D/g, "");
        let dateSlashee = "";

        if (dateStrippee.length >= nbCaractereJoursMois) {
            dateSlashee += `${dateStrippee.substring(0, nbCaractereJoursMois)}/`;
            if (dateStrippee.length >= nbCaractereAnnee) {
                dateSlashee += `${dateStrippee.substring(nbCaractereJoursMois, 4)}/${dateStrippee.substring(nbCaractereAnnee)}`;
            } else {
                dateSlashee += dateStrippee.substring(nbCaractereJoursMois, 5);
            }
        } else {
            dateSlashee += dateStrippee;
        }

        setSelectedDate(dateSlashee);
        const dateComplete = parse(dateSlashee, "dd/MM/yyyy", new Date());
        if (dateStrippee.length >= longueurDateMax) {
            setSelectedMonthYear(dateComplete);
        }

        if (isBefore(dateComplete, minDate) || isAfter(dateComplete, maxDate)) {
            setSelectedMonthYear(new Date(1900, 0, 1));
        }
        onChangeDate(dateComplete);
    }

    function hideShowCalendar() {
        setFocusDate(selectedDate);
        setShowCalendar(!showCalendar);
        setFocusChoiceDate(false);
    }

    function setSelectedDay(day: string) {
        setSelectedDate(day);
        onChangeDate(parse(day, "dd/MM/yyyy", new Date()));
        hideShowCalendar();
    }

    function handleClickOnDay(jour: string | null, monthyear: string) {
        setSelectedDay(`${jour}/${monthyear}`);
        setShowCalendar(false);
    }

    const calendarKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        let number, period;
        switch (event.key) {
            case keyboardKeysEnum.KEY_TAB:
                if (!event.shiftKey) {
                    hideShowCalendar();
                    return;
                }
                break;
            case keyboardKeysEnum.KEY_SPACE:
            case keyboardKeysEnum.KEY_ENTER:
                event.preventDefault();
                setSelectedDay(focusDate);
                return;
            case keyboardKeysEnum.KEY_PAGE_UP:
                if (!(isEqual(selectedMonthYear.getMonth(), minDate.getMonth()) && isEqual(selectedMonthYear.getFullYear(), minDate.getFullYear()))) {
                    number = -1;
                    period = event.shiftKey ? "YEARS" : "MONTHS";
                }
                break;
            case keyboardKeysEnum.KEY_PAGE_DOWN:
                if (!(isEqual(selectedMonthYear.getMonth(), maxDate.getMonth()) && isEqual(selectedMonthYear.getFullYear(), maxDate.getFullYear()))) {
                    number = 1;
                    period = event.shiftKey ? "YEARS" : "MONTHS";
                }
                break;
            case keyboardKeysEnum.KEY_ARROW_LEFT:
                if (!isEqual(selectedMonthYear, minDate)) {
                    number = -1;
                    period = "DAYS";
                }
                break;
            case keyboardKeysEnum.KEY_ARROW_RIGHT:
                if (selectedMonthYear.toLocaleDateString() !== maxDate.toLocaleDateString()) {
                    number = 1;
                    period = "DAYS";
                }
                break;
            case keyboardKeysEnum.KEY_ARROW_UP:
                if (isAfter(selectedMonthYear, addDays(minDate, 6))) {
                    number = -7;
                    period = "DAYS";
                }
                break;
            case keyboardKeysEnum.KEY_ARROW_DOWN:
                if (isBefore(selectedMonthYear, subDays(maxDate, 7))) {
                    number = 7;
                    period = "DAYS";
                }
                break;
            default:
                break;
        }

        if (period && number) {
            event.preventDefault();
            const newFocusDate = focusDate ? parse(focusDate, "dd/MM/yyyy", new Date()) : selectedMonthYear;
            let updateDate = new Date();
            switch (period) {
                case "DAYS":
                    updateDate = addDays(newFocusDate, number);
                    break;
                case "MONTHS":
                    updateDate = addMonths(newFocusDate, number);
                    break;
                case "YEARS":
                    updateDate = addYears(newFocusDate, number);
                    break;
                default:
                    break;
            }
            const newFocusDateString = format(updateDate, "dd/MM/yyyy");

            if (focusDate !== newFocusDateString) {
                setSelectedMonthYear(updateDate);
                setFocusDate(newFocusDateString);
            }
        }
    };

    const calendarIconKeyDown = (event: KeyboardEvent<HTMLAnchorElement>) => {
        if (event.key === keyboardKeysEnum.KEY_SPACE || event.key === keyboardKeysEnum.KEY_ENTER) {
            event.preventDefault();
            hideShowCalendar();
        }
    };

    function getCols() {
        let colsClass = "";
        if (md) {
            colsClass += `mcf-col-md-${md} `;
        }
        if (xs) {
            colsClass += `mcf-col-xs-${xs} `;
        }
        return colsClass;
    }

    return (
        <Form.Group
            controlId={id}
            className="mcf-p--0"
            ref={datePickerRef}>
            <Form.Label as="h3" id={id} className="mcf-text--small-1 mcf-font--base mcf-font-weight--bold">
                {label}
            </Form.Label>

            <InputGroup className=" mcf-align-items--center">
                <Form.Control
                    type="text"
                    autoComplete="bday"
                    isInvalid={errorMessage !== ""}
                    onKeyDown={keyPressed}
                    placeholder={placeholder}
                    value={selectedDate}
                    onChange={onChangeText}
                    maxLength={10}
                    className={`${getCols()} mcf-rounded`}
                    onFocus={() => datePickerRef.current?.scrollIntoView({behavior: "smooth", block: "center"})}
                />
                <InputGroup.Append>
                    <span
                        role="button"
                        onClick={hideShowCalendar}
                        onKeyDown={calendarIconKeyDown}
                        aria-hidden="true"
                        className="mcf-d--none mcf-d-md--block mcf-btn mcf-btn--link ">
                        <span className="icon icon-macif-mobile-calendrier mcf-text--black mcf-icon--2"/>
                    </span>

                </InputGroup.Append>
                <Form.Control.Feedback type="invalid">
                    <span className="icon icon-erreur"></span>
                    {errorMessage}
                </Form.Control.Feedback>
            </InputGroup>

            {showCalendar && (
                <div className="mcf-p--0 mcf-col-lg--4 mcf-col-md-5">
                    <div className="mcf-rounded mcf-shadow  mcf-mt--2">
                        <div
                            className="mcf-rounded--top mcf-bg--bleu-ciel mcf-py--3 mcf-px--2 mcf-d--flex mcf-justify-content--between mcf-align-items--center">
                            <Button
                                disabled={disabledArrowLeft}
                                onClick={() => setSelectedMonthYear(subMonths(selectedMonthYear, 1))}
                                noborder
                                icon="icon-fleche_gauche"
                                variant="info"
                            />

                            <Form.Select
                                md={4}
                                lg={4}
                                name="mois"
                                className="mcf-form-select--sm mcf-text--capitalize mcf-bg--bleu-ciel mcf-text--white mcf-border--white"
                                value={selectedMonthYear.getMonth()}
                                onChange={
                                    (event: ChangeEvent<HTMLInputElement>) =>
                                        setSelectedMonthYear(setMonth(selectedMonthYear, Number(event.target.value)))
                                }
                            >
                                {MONTHS.map((mois, index) => (
                                    <option key={`mois_${index}`} value={index}>
                                        {mois}
                                    </option>
                                ))}
                            </Form.Select>

                            <Form.Select
                                md={4}
                                lg={4}
                                name="annee"
                                value={selectedMonthYear.getFullYear()}
                                className="mcf-form-select--sm mcf-bg--bleu-ciel mcf-text--white mcf-border--white"
                                onChange={
                                    (event: ChangeEvent<HTMLInputElement>) =>
                                        setSelectedMonthYear(setYear(selectedMonthYear, Number(event.target.value)))
                                }>
                                {annees.map((annee, index) => (
                                    <option key={`annee_${index}`} value={annee}>
                                        {annee}
                                    </option>
                                ))}
                            </Form.Select>
                            <Button
                                disabled={disabledArrowRight}
                                onClick={() => setSelectedMonthYear(addMonths(selectedMonthYear, 1))}
                                noborder
                                icon="icon-fleche-droite"
                                variant="info"
                            />
                        </div>

                        <div className="mcf-p--3 mcf-bg--gris-sable mcf-d--flex mcf-justify-content--around">
                            {shortDays.map((jour, index) => <span key={`shortDay_${index}`}>{jour}</span>)}
                        </div>
                        <div
                            className="mcf-p--3"
                            tabIndex={0}
                            onFocus={() => setFocusChoiceDate(true)}
                            onBlur={() => setFocusChoiceDate(false)}
                            onKeyDown={calendarKeyDown}>
                            {semaines.map(semaine => (
                                <div key={`s-${semaine}`} className="mcf-d--flex mcf-justify-content--around mcf-pb--2">
                                    {joursDeSemaine.map(joursSemaine => {
                                        const premierJoursDuMois = new Date(selectedMonthYear.getFullYear(), selectedMonthYear.getMonth(), 1);
                                        const keyJoursdeSemaine = `s-${semaine}_j-${joursSemaine}`;
                                        /* NOTE: Jours grisés avant le début du mois */
                                        if (semaine === 1 && firstDayOfMonth > joursSemaine) {
                                            return (
                                                <Day
                                                    key={keyJoursdeSemaine}
                                                    disabled
                                                    aria-hidden="true"
                                                    onClick={event => handleClickOnDay((event.target as HTMLSelectElement).textContent,
                                                        format(subMonths(selectedMonthYear, 1), "MM/yyyy"))
                                                    }>
                                                    {subDays(premierJoursDuMois, firstDayOfMonth - joursSemaine).getDate().toString()
                                                    }
                                                </Day>
                                            )
                                                ;
                                        }

                                        /* NOTE: Jours grisés après la fin du mois */
                                        const nbSemaineMaxDansMois = 4;
                                        if (semaine > nbSemaineMaxDansMois && daysOfMonth[i] === undefined) {
                                            const dayAfterMonth = (
                                                <Day
                                                    key={keyJoursdeSemaine}
                                                    disabled
                                                    aria-hidden="true"
                                                    onClick={event =>
                                                        handleClickOnDay((event.target as HTMLSelectElement).textContent,
                                                            format(addMonths(selectedMonthYear, 1), "MM/yyyy"))
                                                    }
                                                >
                                                    {format(
                                                        addDays(premierJoursDuMois, after)
                                                        , "dd")
                                                        .toString()
                                                    }
                                                </Day>
                                            );
                                            after++;
                                            return dayAfterMonth;
                                        }

                                        const joursDuMois = `${daysOfMonth[i]}`.padStart(2, "0");
                                        const dateEnCours = setDate(selectedMonthYear, Number(joursDuMois));

                                        const barre = isBefore(dateEnCours, minDate) || isAfter(dateEnCours, maxDate);
                                        const day = (
                                            <Day
                                                key={keyJoursdeSemaine}
                                                striked={barre}
                                                aria-hidden="true"
                                                selected={selectedDate === dateEnCours.toLocaleDateString()}
                                                focus={
                                                    focusChoiceDate &&
                                                    focusDate === dateEnCours.toLocaleDateString()
                                                }
                                                onClick={e =>
                                                    handleClickOnDay((e.target as HTMLSelectElement).textContent,
                                                        format(selectedMonthYear, "MM/yyyy"))
                                                }>
                                                {joursDuMois}
                                            </Day>
                                        );
                                        i++;
                                        return day;
                                    })}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </Form.Group>
    );
}
