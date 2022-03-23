import styled from "styled-components";

interface TextFielProps{
    iconStart?: boolean,
    iconBottom?: boolean,
    error?: boolean
}
export const TextField = styled.input<TextFielProps>`
    font-family: 'Karla', sans-serif;
    width: 100%;
    height: 55px;
    border: ${props => props.error ? "2px solid red" : "1px solid #D2E3EF"};
    border-radius: 4px;
    outline: 0;
    font-size: 16px;
    color: #748C94;
    padding: 7px 0;
    font-weight: 400;
    background: transparent;
    transition: border-color 0.2s;
    padding-left: ${props => props.iconStart ? "35px" : "5px"};
    padding-right: ${props => props.iconBottom ? "35px" : "5px"};
    &::placeholder {
        color: transparent;
    }

    &:placeholder-shown ~ .form__label {
        font-size: 16px;
        cursor: text;
        top: 35px;
        left: ${props => props.iconStart ? "35px" : "5px"};
    }

    &:required,&:invalid { box-shadow:none; }

    &:focus {
    ~ .form__label {
        position: absolute;
        top: 5px;
        left: 10px;
        display: block;
        transition: 0.2s;
        font-size: 16px;
        color: #FF6900;  
    }

    padding-bottom: 6px;  
    font-weight: 400;
    border-radius: 4px;
    border: 2px solid #FF6900;
    border-image-slice: 1;
}
`

export const FormGroup = styled.div`
    position: relative;
    padding: 15px 0 0;
    width: 100%;
`;

interface LabelProps{
    error?: Boolean
}
export const Label = styled.label<LabelProps>`
    font-family: 'Karla', sans-serif;
    position: absolute;
    padding-right: 4px;
    padding-left: 4px;
    top: 5px;
    display: block;
    transition: 0.2s;
    font-size: 16px;
    color: ${props => props.error ? "red" : "#B1BEC2"};
    font-weight: 400;
    line-height: 107.6%;
    font-style: normal;
    left: 10px;
    background-color: #fff;
    user-select: none;
`;

interface ContentIconProps{
    bottom?: boolean;
}
export const ContentIcon = styled.div<ContentIconProps>`
    position: absolute;
    left: ${props => props.bottom ? "unset" : "15px"};
    right: ${props => props.bottom ? "15px" : "unset"};
    bottom: ${props => props.bottom ? "15px" : "unset"};
    top: ${props => props.bottom ? "unset" : "35px"};
`;

export const ContentInput = styled.div`
    width: 40%;
    @media (max-width: 800px){
        width: 100%;
    }
`;