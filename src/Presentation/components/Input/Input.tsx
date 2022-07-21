import {Form} from "macif-components";
import React, {useEffect, useState} from "react";

export interface InputProps {
    readonly id: string;
    readonly label: string;
    readonly onChange: Function;
    readonly value: string;
    readonly message?: string;
    readonly type?: string;
    readonly maxLength?: number;
    readonly errorMessage?: string;
}

export default function Input({id, label, onChange, value, message, type = "text", maxLength, errorMessage = ""}: InputProps) {
    const [inputValue, setInputValue] = useState(value)

    useEffect(() => onChange(inputValue), [inputValue, onChange])

    const handleChangeValue = (event: any) => {
        setInputValue(event.target.value);
    }

    return <Form.Group controlId={id}>
        <Form.Label as="h3" className="mcf-text--small-1 mcf-font--base mcf-font-weight--bold">{label}</Form.Label>
        {message && <Form.Text className="mcf-text--small-1" muted>{message}</Form.Text>}
        <Form.Control as="input"
                      type={type}
                      onChange={handleChangeValue}
                      value={inputValue}
                      maxLength={maxLength}
                      className="mcf-w--auto"
                      isInvalid={errorMessage !== ""}/>
        <Form.Control.Feedback type="invalid">
            <span className="icon icon-erreur"></span>
            {errorMessage}
        </Form.Control.Feedback>
    </Form.Group>
}