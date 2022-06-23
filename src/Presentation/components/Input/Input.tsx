import {Form} from "macif-components";
import {useEffect, useState} from "react";

export interface InputProps {
    readonly id: string;
    readonly label: string;
    readonly type?: string;
    readonly message: string;
    readonly maxLength: number;
    readonly onChange: Function;
    readonly value: string;
}

export default function Input({label, type = "text", message, maxLength, id, onChange, value}: InputProps) {
    const [inputValue, setInputValue] = useState(value)

    useEffect(() => onChange(inputValue), [inputValue, onChange])

    const handleChangeValue = (event: any) => {
        setInputValue(event.target.value);
    }

    return <Form.Group controlId={id}>
        <Form.Label as="h3" className="mcf-text--small-1 mcf-font--base mcf-font-weight--bold">{label}</Form.Label>
        <Form.Text className="mcf-text--small-1" muted>{message}</Form.Text>
        <Form.Control as="input"
                      type={type}
                      onChange={handleChangeValue}
                      value={inputValue}
                      maxLength={maxLength}
                      className="mcf-w--auto"/>
    </Form.Group>
}