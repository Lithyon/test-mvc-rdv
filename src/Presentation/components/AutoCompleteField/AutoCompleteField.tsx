import {ChangeEvent, KeyboardEvent, useEffect, useState} from "react";
import {Dropdown, Form} from "macif-components";
import Highlight from "./Highlight";
import useManagedState from "../../hooks/useManagedState";

interface AutoCompleteFieldProps<T> {
    readonly id: string;
    readonly label: string;
    readonly onSelect: Function;
    readonly onSearchChange: Function;
    readonly dataSource: Array<T>;
    readonly labelFormat: Function;
    readonly debounceMs?: number;
    readonly type?: string;
    readonly autoComplete?: string;
    readonly errorMessage?: string;
    readonly optionalText?: string;
    readonly placeholder?: string;
}

enum KeyboardKeysEnum {
    UPARROW = "ArrowUp",
    DOWNARROW = "ArrowDown",
    ENTER = "Enter",
    ESCAPE = "Escape"
}

let timeoutId: ReturnType<typeof setTimeout>;

export default function AutoCompleteField<T>({
                                                 id,
                                                 label,
                                                 onSelect,
                                                 onSearchChange,
                                                 optionalText,
                                                 placeholder,
                                                 dataSource,
                                                 errorMessage = "",
                                                 debounceMs = 450,
                                                 type = "text",
                                                 autoComplete = "off",
                                                 labelFormat
                                             }: AutoCompleteFieldProps<T>) {
    const [firstItem] = dataSource;

    const [isFocus, setFocus] = useState(false);
    const [recherche, setRecherche] = useState("");
    const [selectedItem, setSelectedItem] = useManagedState("");
    const [activeItem, setActiveItem] = useManagedState(firstItem);
    const [idItemSurbrillance, setIdItemSurbrillance] = useState("");

    useEffect(() => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            onSearchChange(recherche);
        }, debounceMs);
    }, [recherche]);

    const onTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedItem(undefined);
        onSelect(undefined);

        setRecherche(event.target.value);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (!selectedItem) {
            switch (event.key) {
                case KeyboardKeysEnum.UPARROW:
                    event.preventDefault();
                    setActiveItem((active: T) => {
                        const activeItemIdx = dataSource.indexOf(active);
                        const index = activeItemIdx > 0 ? activeItemIdx - 1 : dataSource.length - 1;

                        setIdItemSurbrillance(`${index}_dropdown_menu`);

                        return dataSource[index];
                    });
                    break;
                case KeyboardKeysEnum.DOWNARROW:
                    event.preventDefault();
                    setActiveItem((active: T) => {
                        const activeItemIdx = dataSource.indexOf(active);
                        const index = activeItemIdx < dataSource.length - 1 ? activeItemIdx + 1 : 0;

                        setIdItemSurbrillance(`${index}_dropdown_menu`);

                        return dataSource[index];
                    });
                    break;
                case KeyboardKeysEnum.ENTER:
                    event.preventDefault();

                    setSelectedItem(activeItem);
                    onSelect(activeItem);

                    setActiveItem(undefined);
                    setIdItemSurbrillance("");
                    break;
                case KeyboardKeysEnum.ESCAPE:
                    event.preventDefault();

                    setFocus(false);
                    setSelectedItem("");
                    onSelect("");

                    setActiveItem(undefined);
                    setIdItemSurbrillance("");

                    break;
                default:
                    break;
            }
        }
    };

    const show = dataSource.length > 0 && !selectedItem && isFocus;

    return (
        <Form.Group controlId={id}>
            <Form.Label as="h3"
                        optionalText={optionalText}
                        className="mcf-text--small-1 mcf-font--base mcf-font-weight--bold">
                {label}
            </Form.Label>

            <Form.Control as="input"
                          type={type}
                          maxLength={100}
                          isInvalid={errorMessage !== ""}
                          placeholder={placeholder}
                          value={selectedItem ? labelFormat(selectedItem) : recherche}
                          onFocus={() => setFocus(true)}
                          onChange={onTextChange}
                          onKeyDown={handleKeyDown}
                          autoComplete={autoComplete}
                          aria-expanded={show}
                          aria-owns={`${id}-dropdown`}
                          aria-activedescendant={idItemSurbrillance}
                          aria-describedby="champ-recherche champ-recherche-erreur"
            />

            <div id={`${id}-dropdown`} className={`mcf-dropdown__menu${show ? " show" : ""}`}>
                {dataSource.map((item: T, index: number) => (
                    <Dropdown.Item
                        id={`${index}_dropdown_menu`}
                        key={`${index}_dropdown_menu`}
                        active={activeItem && activeItem === item}
                        onClick={() => {
                            setSelectedItem(item);
                            onSelect(item);
                            setFocus(false);
                        }}
                    >
                        <Highlight controlId={`${index}_dropdown_menu`} labelFormat={labelFormat(item)} recherche={recherche}/>
                    </Dropdown.Item>
                ))}
            </div>

            <Form.Control.Feedback type="invalid" id="champ-recherche-erreur" aria-live="polite" aria-atomic="true">
                <span className="icon icon-erreur"></span>
                {errorMessage}
            </Form.Control.Feedback>
        </Form.Group>
    );
}
