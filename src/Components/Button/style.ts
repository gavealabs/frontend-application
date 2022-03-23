import styled from "styled-components";

interface ButtonProps{
    variant: string;
    marginTop?: string;
}

export const Button = styled.button<ButtonProps>`
    width: 40%;
    background-color: ${props => props.variant === "contained" ? "#FF6900" : "transparent"};
    border: ${props => props.variant === "contained" ? "1px solid #FF6900" : "1px solid #fff"};
    height: 55px;
    color: #fff;
    font-weight: 700;
    font-size: 15px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.5s;
    margin-top: ${props => props.marginTop ? props.marginTop : "0px"};
    filter: drop-shadow(0px 6px 13px rgba(45, 56, 83, 0.16));
    &:hover{
        background-color: ${props => props.variant === "contained" ? "#C65302": "transparent"};
        border: ${props => props.variant === "contained" ? "1px solid #C65302" : "1px solid #FF6900"};
        color: ${props => props.variant === "contained" ? "#fff" : "#FF6900"};
    }
    @media (max-width: 800px){
        width: 100%;
    }
`;