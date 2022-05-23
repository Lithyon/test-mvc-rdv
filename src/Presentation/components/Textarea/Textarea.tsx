import {Form} from "macif-components";
import {ChangeEvent, useEffect, useState} from "react";

export interface TextareaProps {
    readonly label: string;
    readonly id: string;
    readonly maxLenght: number;
    readonly onChange: Function;
    readonly value: string;
}

export default function Textarea({label, id, maxLenght, onChange, value}: TextareaProps) {
    const [count, setCount] = useState(maxLenght - value.length)
    const [inputValue, setInputValue] = useState(value)
    const infoCounter = count <= 1 ? `${count} caractère restant` : `${count} caractères restants`;

    const recalculateCounter = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        setCount(maxLenght - event.target.value.length);
    }

    useEffect(() => onChange(inputValue),[inputValue])

    return <Form.Group controlId={id}>
        <Form.Label>{label}</Form.Label>
        <Form.Control as="textarea" rows={3}
                      onChange={recalculateCounter}
                      maxLength={maxLenght} value={inputValue}/>
        <Form.Text muted>{infoCounter}</Form.Text>
    </Form.Group>
}