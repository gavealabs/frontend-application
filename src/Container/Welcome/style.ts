import styled from "styled-components";
import Background from "../../assets/images/background.png";

export const Screen = styled.div`
    width: 100%;
    height: 100%;
    min-height: 500px;
    background-color: #1C3446;
    display: flex;
    flex-direction: column;
    padding: 15px 5%;
    justify-content: space-between;
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 800px){
        background-image: url(${Background});
        padding: 15px 20px;
    }
`;

export const MessageWelcome = styled.h3`
    color: #FFF;
    font-size: 36px;
    margin-bottom: 15%;
`;

export const DivCenter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`