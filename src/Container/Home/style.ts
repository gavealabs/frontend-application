import styled from "styled-components";

export const Screen = styled.div`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    padding: 15px 5%;
    background-image: linear-gradient(180deg, #01426A 20%, #fff 5%);
    min-height: 650px;
    @media (max-width: 800px){
        padding: 15px 20px;
    }
`;

export const LogoHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    height: 10%;
`;

export const Box = styled.div`
    width: 100%;
    background-color: #fff;
    margin-top: 20px;
    border-radius: 7px;
    min-height: 80px;
    max-height: 150px;
    box-shadow: 0px 12px 35px rgba(1, 66, 106, 0.2);
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px;
    animation: go-back 1s;
    @keyframes go-back{
        from{
            transform: translateX(100px);
        }
        to{
            transform: translateX(0);
        }
    }
`;

export const IconUser = styled.div`
    width: 50px;
    height: 50px;
    background: #5998C5;
    box-shadow: 0px 3.6px 8.1px rgba(45, 56, 83, 0.2);
    border-radius: 50%;
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    font-family: 'Karla';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 107.6%;
    color: #fff;
`;

export const Introduction = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 100%;
    color: #092A34;
`;

export const SmallIntroduction = styled.small`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 107.6%;
    color: #748C94;
    opacity: 0.8;
    margin-top: 5px;
`;

interface DescriptionProps{
    width?: string
}
export const Description = styled.p<DescriptionProps>`
    font-family: 'Karla';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #B1BEC2;
    width: ${props => props.width ? props.width : "20%"};
`;

export const DivList = styled.div`
    width: 100%;
    height: calc(75% - 40px);
    overflow-y: auto;
    overflow-x: hidden;
`;

export const DivContent = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Head = styled.div`
    width: 100%;
    height: 20px;
    margin-top: 20px;
    display: flex;
`