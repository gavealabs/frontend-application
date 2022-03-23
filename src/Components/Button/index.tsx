import React from "react";
import { Button as ButtonContent } from "./style";

interface Atributos{
    variant: string,
    children: React.ReactNode,
    marginTop?: string,
    onClick?: () => void
}

export default function Button(props: Atributos): JSX.Element {
    return (
        <ButtonContent
            variant={props.variant}
            marginTop={props.marginTop ? props.marginTop : "0px"}
            onClick={() => {
                if(typeof props.onClick === "function")
                    props.onClick();
            }}
        >
            {props.children}
        </ButtonContent>
    )
}