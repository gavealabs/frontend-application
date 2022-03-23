import React from "react";
import { TextField, FormGroup, Label, ContentIcon, ContentInput } from "./style";

interface Atributos{
    iconStart?: React.ReactNode,
    iconBottom?: React.ReactNode,
    type: string,
    label: string,
    name?: string,
    value?: string | number,
    id?: string,
    required?: boolean,
    style?: object,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    errorMessage?: string,
    placeholder?: string
}

export default function Input(props: Atributos): JSX.Element{
    const inputRef = React.useRef<HTMLInputElement>(null);

    return(
        <ContentInput>
            <FormGroup style={props.style} className="form__group field">
                {props.iconStart && <ContentIcon>{props.iconStart}</ContentIcon>}
                <TextField
                    error={props.errorMessage ? true : false}
                    type={props.type}
                    iconStart={props.iconStart ? true : false}
                    iconBottom={props.iconBottom ? true : false}
                    className="form__field"
                    placeholder={props.placeholder ? props.placeholder : props.label}
                    name={props.name ? props.name : "input"}
                    value={props.value ? props.value : ""}
                    id={props.id ? props.id : "input"}
                    required={props.required}
                    ref={inputRef}
                    onChange={(e) => {
                        if(typeof props.onChange === "function")
                            props.onChange(e)
                        }}
                />
                <Label
                    htmlFor={props.label}
                    className="form__label"
                    error={props.errorMessage ? true : false}
                    onClick={() => inputRef?.current?.focus()}
                >
                    {props.label}
                </Label>
                {props.iconBottom && <ContentIcon bottom={true}>{props.iconBottom}</ContentIcon>}
            </FormGroup>
            {props.errorMessage && <small style={{color: "red", fontSize: "10px", width: "100%"}}>{props.errorMessage}</small>}
        </ContentInput>
    )
}