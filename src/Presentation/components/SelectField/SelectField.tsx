import {Form} from "macif-components";
import {ChangeEvent, useRef} from "react";

interface SelectFieldProps {
    readonly id: string;
    readonly label: string;
    readonly dataSource: Array<OptionProps>;
    readonly onChangeSelect: Function;
    readonly defaultValue?: string
    readonly errorMessage?: string
    readonly optionalText?: string
    readonly labelDefaultChoice?: string
}

interface OptionProps {
    readonly code: string;
    readonly libelle: string;
}

export default function SelectField({
                                        id,
                                        label,
                                        dataSource,
                                        onChangeSelect,
                                        defaultValue = "",
                                        errorMessage = "",
                                        optionalText,
                                        labelDefaultChoice = "Sélectionnez"
                                    }: SelectFieldProps
) {
    const selectFieldRef = useRef<HTMLDivElement>(null);

    function onChangeText(event: ChangeEvent<HTMLSelectElement>) {
        dataSource
            .filter(value => value.code === event.target.value)
            .forEach(value => onChangeSelect(value));
    }

    return dataSource.length > 0 ? (
        <Form.Group controlId={id}
                    ref={selectFieldRef}>
            <Form.Label as="h3" id={id} optionalText={optionalText}>
                {label}
            </Form.Label>
            <Form.Select
                isInvalid={errorMessage !== ""}
                onChange={onChangeText}
                defaultValue={defaultValue}
                className="mcf-col-md-8"
                onFocus={() => selectFieldRef.current?.scrollIntoView({behavior: "smooth", block: "center"})}
            >
                <option disabled value="">{labelDefaultChoice}</option>
                {
                    dataSource.map((elt: OptionProps) => (
                        <option key={elt.code} value={elt.code}>
                            {elt.libelle}
                        </option>))
                }
            </Form.Select>
            <Form.Control.Feedback type="invalid">
                <span className="icon icon-erreur"></span>
                {errorMessage}
            </Form.Control.Feedback>
        </Form.Group>
    ) : <></>;
}
