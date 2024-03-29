import {Form} from "macif-components";
import {ChangeEvent, useEffect, useRef, useState} from "react";

export interface TextareaProps {
    readonly label: string;
    readonly id: string;
    readonly maxLength: number;
    readonly onChange: Function;
    readonly value: string;
}

export default function Textarea({label, id, maxLength, onChange, value}: TextareaProps) {
    const textAreaRef = useRef<HTMLDivElement>(null);
    const [count, setCount] = useState(maxLength - value.length);
    const [inputValue, setInputValue] = useState(value);
    const infoCounter = count <= 1 ? `${count} caractère restant` : `${count} caractères restants`;

    const recalculateCounter = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        setCount(maxLength - event.target.value.length);
    };

    const ariaLiveValue: "off" | "assertive" | "polite" | undefined = count <= 20 ? "assertive" : "polite";

    useEffect(() => onChange(inputValue), [inputValue, onChange]);

    return <Form.Group controlId={id} ref={textAreaRef}>
        <Form.Label as="h3">{label}<span className="mcf-sr-only">{infoCounter}</span></Form.Label>
        <Form.Control as="textarea" rows={3}
                      onChange={recalculateCounter}
                      maxLength={maxLength} value={inputValue}
                      onFocus={() => textAreaRef.current?.scrollIntoView({behavior: "smooth", block: "center"})}/>
        <Form.Text className="mcf-text--small-1" muted aria-live={ariaLiveValue} aria-atomic="true">{infoCounter}</Form.Text>
    </Form.Group>;
}
