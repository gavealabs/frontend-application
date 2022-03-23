import React from "react";
import { Box, Description, Icon } from "./style";

interface Atributos{
    icon?: string,
    name: string,
    date: string,
    amount: number,
    value: number,
    iconName: string
}

export default function ListItem(props: Atributos): JSX.Element{
    return(
        <Box color={props.value > 0 ? "#06A75C" : "#ED0000"}>
            <div style={{width: "12%"}}>
                <Icon src={require(`../../assets/svg/${props.iconName}.svg`)}/>
            </div>
            <Description width="30%">{props.name}</Description>
            <Description width="19%">{props.date}</Description>
            <Description width="19%">{props.amount}</Description>
            <Description width="19%" color={props.value > 0 ? "#06A75C" : "#ED0000"}>
                {props.value < 0 ? (props.value * -1) : props.value}
            </Description>
        </Box>
    )
}