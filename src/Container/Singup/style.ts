import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled.h4`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;
    color: #092A34;
    margin-bottom: 10px;
`;

interface SmallTextProps{
    color?: string,
    weight?: number,
    marginLeft?: string
}
export const SmallText = styled.p<SmallTextProps>`
    color: ${props => props.color ? props.color : "#748C94"};
    font-family: 'Karla';
    font-style: normal;
    font-weight: ${props => props.weight ? props.weight : 400};
    font-size: 15px;
    line-height: 107.6%;
    margin-left: ${props => props.marginLeft ? props.marginLeft : 0};
`;

export const Screen = styled.div`
    width: 100%;
    height: 100%;
    padding: 15px 2%;
    min-height: 500px;
    @media (max-width: 800px){
        padding: 15px 20px;
    }
`;

export const LinkText = styled(Link)`
    height: 100%;
    justify-content: flex-start;
    display: flex;
    text-decoration: none;
    @media (max-width: 800px){
        justify-content: center;
    }
`;

export const DivContent = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

interface MessageProps{
    typeMessage?: string;
}
export const Message = styled.p<MessageProps>`
    display: flex;
    align-items: center;
    color: ${props => props.typeMessage === "error" ? "red" : "green"};
    font-weight: 700;
    font-size: 15px;
    margin-bottom: 5px;
`;

export const MessageContent = styled.div`
    width: 100%;
    height: 10%;
`;