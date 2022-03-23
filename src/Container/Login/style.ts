import styled from "styled-components";
import { Link  } from "react-router-dom";

interface TitleProps{
    color?: string;
}
export const Title = styled.h4<TitleProps>`
    font-size: 35px;
    color: ${props => props.color ? props.color : "#000"};
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
    min-height: 500px;
    padding: 15px 2%;
    @media (max-width: 800px){
        padding: 15px 0px;
    }
`;

export const LinkText = styled(Link)`
    height: 10%;
    justify-content: flex-start;
    display: flex;
    text-decoration: none;
    @media (max-width: 800px){
        justify-content: center;
    }
`;

export const Message = styled.p`
    display: flex;
    align-items: center;
    color: red;
    font-weight: 700;
    font-size: 15px;
`;

export const DivContent = styled.div`
    width: 100%;
    height: 90%;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;