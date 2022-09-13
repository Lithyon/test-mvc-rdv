import {Form} from "macif-components";
import React, {ChangeEvent, useEffect, useRef, useState} from "react";

export interface InputProps {
    readonly id: string;
    readonly label: string;
    readonly onChange: Function;
    readonly value: string;
    readonly message?: string;
    readonly type?: string;
    readonly maxLength?: number;
    readonly errorMessage?: string;
    readonly autoComplete?: string;
    readonly classNameControl?: string;
}

export default function Input({
                                  id,
                                  label,
                                  onChange,
                                  value,
                                  message,
                                  type = "text",
                                  maxLength,
                                  errorMessage = "",
                                  autoComplete = "off",
                                  classNameControl = "mcf-col-md-8"
                              }: InputProps) {
    const inputRef = useRef<HTMLDivElement>(null);
    const [inputValue, setInputValue] = useState(value);

    useEffect(() => onChange(inputValue), [inputValue, onChange]);

    const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return <Form.Group controlId={id} ref={inputRef}>
        <Form.Label>{label}</Form.Label>
        {message && <Form.Text className="mcf-text--small-1" muted>{message}</Form.Text>}
        <Form.Control as="input"
                      type={type}
                      onChange={handleChangeValue}
                      value={inputValue}
                      maxLength={maxLength}
                      className={classNameControl}
                      isInvalid={errorMessage !== ""}
                      autoComplete={autoComplete}
                      onFocus={() => inputRef.current?.scrollIntoView({behavior: "smooth", block: "center"})}/>
        <Form.Control.Feedback type="invalid">
            <span className="icon icon-erreur"></span>
            {errorMessage}
        </Form.Control.Feedback>
    </Form.Group>;
}
