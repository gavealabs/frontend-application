import styled from "styled-components";

interface BoxProps{
    color: string
}

export const Box = styled.div<BoxProps>`
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #D2E3EF;
    box-sizing: border-box;
    box-shadow: 0px 17px 60px rgba(45, 76, 113, 0.07), 0px 3.79717px 13.4018px rgba(45, 76, 113, 0.0417275), 0px 1.13052px 3.99006px rgba(45, 76, 113, 0.0282725);
    border-radius: 4px;
    height: 50px;
    background-image: ${props => "linear-gradient(90deg, " + props.color + " 10px, #fff 0%)"};
    padding: 5px 15px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
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

interface DescriptionProps{
    width?: string,
    color?: string
}
export const Description = styled.p<DescriptionProps>`
    font-family: 'Karla';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 107.6%;
    color: ${props => props.color ? props.color : "#47595F"};
    width: ${props => props.width ? props.width : "20%"};
`;

export const Icon = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 0.5px solid #D2E3EF;
    box-sizing: border-box;
`;