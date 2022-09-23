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
    return Array.from({length: end - start + 1}, (_, i) => i + start);
}

const NOMBRE_SEMAINES_MAX_PAR_MOIS = [1, 2, 3, 4, 5, 6];
const LISTE_JOURS_PAR_SEMAINE = [1, 2, 3, 4, 5, 6, 7];
const TAILLE_TEXTE_MOIS = 2;
const TAILLE_TEXTE_ANNEE = 4;
const TAILLE_TEXTE_DATE = 8;
const TAILLE_TEXTE_DATE_AVEC_SLASH = 10;
const shortDays = getShortDays();

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
    const listeAnneesDisponible = range(minDate.getFullYear(), maxDate.getFullYear());

    const [daysOfMonth, setDaysOfMonth] = useState<number[]>([]);
    const [selectedMonthYear, setSelectedMonthYear] = useState(minDate);
    const [selectedDate, setSelectedDate] = useState("");
    const [focusDate, setFocusDate] = useState(selectedDate);
    const [focusChoiceDate, setFocusChoiceDate] = useState(false);
    const [firstDayOfMonth, setFirstDayOfMonth] = useState(1);
    const [showCalendar, setShowCalendar] = useState(false);
    const [disabledArrowLeft, setDisabledArrowLeft] = useState(false);
    const [disabledArrowRight, setDisabledArrowRight] = useState(false);

    useEffect(() => {
        if (selectedDate === "") {
            const newDate = new Date(0);
            setSelectedMonthYear(newDate);
            onChangeDate(newDate);
        } else {
            const parseDate = parse(selectedDate, "dd/MM/yyyy", new Date());

            if (selectedDate.length === TAILLE_TEXTE_DATE_AVEC_SLASH && parseDate.toDateString() === "Invalid Date") {
                setSelectedDate("");
            } else {
                onChangeDate(parseDate);
            }
        }
    }, [selectedDate, onChangeDate]);

    useEffect(
        () => {
            setDisabledArrowRight(true);
            setDisabledArrowLeft(true);

            if (selectedMonthYear.toDateString() !== "Invalid Date") {
                setDaysOfMonth(range(1, lastDayOfMonth(selectedMonthYear).getDate()));

                setFirstDayOfMonth(startOfMonth(selectedMonthYear).getDay());

                const disableArrowLeft = minDate.getFullYear() === selectedMonthYear.getFullYear() && minDate.getMonth() === selectedMonthYear.getMonth();
                setDisabledArrowLeft(disableArrowLeft);

                const disableArrowRight = maxDate.getFullYear() === selectedMonthYear.getFullYear() && maxDate.getMonth() <= selectedMonthYear.getMonth();
                setDisabledArrowRight(disableArrowRight);
            }
        },
        [selectedMonthYear, minDate, maxDate]
    );

    let i = 0;
    let after = 0;

    function keyPressed(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key === keyboardKeysEnum.KEY_BACKSPACE || event.key === keyboardKeysEnum.KEY_DEL) {
            setSelectedDate("");
        }
        if (event.key === keyboardKeysEnum.KEY_SPACE) {
            setShowCalendar(true);
        }
    }

    function onChangeText(event: ChangeEvent<HTMLInputElement>) {
        const dateStrippee = event.target.value.replace(/\D/g, "");
        let dateSlashee = "";

        if (dateStrippee.length >= TAILLE_TEXTE_MOIS) {
            dateSlashee += `${dateStrippee.substring(0, TAILLE_TEXTE_MOIS)}/`;
            if (dateStrippee.length >= TAILLE_TEXTE_ANNEE) {
                dateSlashee += `${dateStrippee.substring(TAILLE_TEXTE_MOIS, 4)}/${dateStrippee.substring(TAILLE_TEXTE_ANNEE)}`;
            } else {
                dateSlashee += dateStrippee.substring(TAILLE_TEXTE_MOIS, 5);
            }
        } else {
            dateSlashee += dateStrippee;
        }

        setSelectedDate(dateSlashee);
        const dateComplete = parse(dateSlashee, "dd/MM/yyyy", new Date());

        if (dateComplete.toDateString() !== "Invalid Date") {
            if (dateStrippee.length >= TAILLE_TEXTE_DATE) {
                setSelectedMonthYear(dateComplete);
            }

            if (isBefore(dateComplete, minDate) || isAfter(dateComplete, maxDate)) {
                setSelectedMonthYear(new Date(1900, 0, 1));
            }
        }
    }

    function hideShowCalendar() {
        setFocusDate(selectedDate);
        setShowCalendar(!showCalendar);
        setFocusChoiceDate(false);
    }

    function setSelectedDay(day: string) {
        setSelectedDate(day);
        hideShowCalendar();
    }

    function handleClickOnDay(jour: string | null, monthyear: string) {
        setSelectedDay(`${jour}/${monthyear}`);
        setShowCalendar(false);
    }

    function handleCalendarKeyboardEvent(event: KeyboardEvent<HTMLInputElement>) {
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
            case keyboardKeysEnum.KEY_ARROW_LEFT:
            case keyboardKeysEnum.KEY_ARROW_RIGHT:
            case keyboardKeysEnum.KEY_ARROW_UP:
            case keyboardKeysEnum.KEY_ARROW_DOWN:
                handleCalendarKeyboardArrowEvent(event);
                break;
            case keyboardKeysEnum.KEY_PAGE_UP:
            case keyboardKeysEnum.KEY_PAGE_DOWN:
                handleCalendarKeyboardPageEvent(event);
                break;
            default:
                break;
        }
    }

    function handleCalendarKeyboardPageEvent(event: KeyboardEvent<HTMLInputElement>) {
        const period = event.shiftKey ? "YEARS" : "MONTHS";

        switch (event.key) {
            case keyboardKeysEnum.KEY_PAGE_UP:
                if (!(isEqual(selectedMonthYear.getMonth(), minDate.getMonth()) && isEqual(selectedMonthYear.getFullYear(), minDate.getFullYear()))) {
                    updateDateAfterKeyboardEvent(event, period, -1);
                }
                break;
            case keyboardKeysEnum.KEY_PAGE_DOWN:
                if (!(isEqual(selectedMonthYear.getMonth(), maxDate.getMonth()) && isEqual(selectedMonthYear.getFullYear(), maxDate.getFullYear()))) {
                    updateDateAfterKeyboardEvent(event, period, 1);
                }
                break;
            default:
                break;
        }
    }

    function handleCalendarKeyboardArrowEvent(event: KeyboardEvent<HTMLInputElement>) {
        const period = "DAYS";

        switch (event.key) {
            case keyboardKeysEnum.KEY_ARROW_LEFT:
                if (!isEqual(selectedMonthYear, minDate)) {
                    updateDateAfterKeyboardEvent(event, period, -1);
                }
                break;
            case keyboardKeysEnum.KEY_ARROW_RIGHT:
                if (selectedMonthYear.toLocaleDateString() !== maxDate.toLocaleDateString()) {
                    updateDateAfterKeyboardEvent(event, period, 1);
                }
                break;
            case keyboardKeysEnum.KEY_ARROW_UP:
                if (isAfter(selectedMonthYear, addDays(minDate, 6))) {
                    updateDateAfterKeyboardEvent(event, period, -7);
                }
                break;
            case keyboardKeysEnum.KEY_ARROW_DOWN:
                if (isBefore(selectedMonthYear, subDays(maxDate, 7))) {
                    updateDateAfterKeyboardEvent(event, period, 7);
                }
                break;
            default:
                break;
        }
    }

    function updateDateAfterKeyboardEvent(event: KeyboardEvent<HTMLInputElement>, period: string, quantiteJourMoisAnneeAAjouter: number) {
        event.preventDefault();

        const newFocusDate = focusDate
            ? parse(focusDate, "dd/MM/yyyy", new Date())
            : selectedMonthYear;

        let updateDate = new Date();

        switch (period) {
            case "DAYS":
                updateDate = addDays(newFocusDate, quantiteJourMoisAnneeAAjouter);
                break;
            case "MONTHS":
                updateDate = addMonths(newFocusDate, quantiteJourMoisAnneeAAjouter);
                break;
            case "YEARS":
                updateDate = addYears(newFocusDate, quantiteJourMoisAnneeAAjouter);
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
        <Form.Group controlId={id} className="mcf-p--0" ref={datePickerRef}>
            <Form.Label
                as="h3"
                id={id}
            >
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
                                {listeAnneesDisponible.map((annee, index) => (
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
                            onKeyDown={handleCalendarKeyboardEvent}>
                            {NOMBRE_SEMAINES_MAX_PAR_MOIS.map((semaine) => (
                                <div key={`s-${semaine}`} className="mcf-d--flex mcf-justify-content--around mcf-pb--2">
                                    {LISTE_JOURS_PAR_SEMAINE.map((joursSemaine) => {
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
                                            );
                                        }

                                        /* NOTE: Jours grisés après la fin du mois */
                                        if (semaine > 4 && daysOfMonth[i] === undefined) {
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
