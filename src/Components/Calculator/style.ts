import { styled } from "styled-components";
import styles from "../../Style";


export const Card = styled.div`
    background-color: #F8FAE4;
    border-radius: 46px;
    width: 50%;
    max-width: 450px;

    height: auto;
    padding: 20px;
    margin: 0 auto;



    @media only screen and (max-width: 1250px) {
       width: 60%;
    }
   
    @media only screen and (max-width: 1070px) {
       width: 80%;
    }

    @media only screen and (max-width: 700px) {
        width: 328px;
        justify-content: center;
        align-items: center;
        display: flex;
        padding: 15px 0px;
    }

    
    @media only screen and (max-width: 300px) {
        width: 260px;
    }
`;

export const Container = styled.div`
    width: 40%;

  @media only screen and (max-width: 700px) {
       width: 80%;
    }
`;

export const Visor = styled.div`
    background-color: ${styles.colors.blueCalculator};
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: end;
    width: 100%;
    border-radius: 46px;
    overflow: hidden;
    h1{
        font-family: Dela Gothic Regular;
        margin: 10px;
        margin-left: auto;
        color: white;
        font
    }
`;

export const Back = styled.div`
    height: 50px;
    width: 100%;
    padding-bottom: 4px;
    padding-right: 4px;
    background-color: ${styles.colors.calculatorBackColor};
    border-radius: 46px;
`;
