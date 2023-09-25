import styled from "styled-components";


export const ErrorMessageContainer = styled.div<{ type?: "error" | "confirmation" }>`
  p {
    font-size: 16px;
    /* Estilos comuns para ambas as mensagens */
  }

  ${({ type }) =>
    type === "error" &&
    `
    p {
      color: red;
      padding: 10px;
      background-color: #f8d7da;
      border-color:#f5c6cb
      width: 100%;
      border-radius:3%;

      @media only screen and (max-width: 1070px) {
        margin-right: 70px;
     }
    }
  `}

  ${({ type }) =>
    type === "confirmation" &&
    `
    p {
        text-align: center;
    color: green;
    padding: 15px;
    background-color: #d4edda;
    border-color: #c3e6cb;
    width: 35%;
    border-radius: 3%;
    position: absolute;
    top: 0px;
    /* margin: 0px 103px 30px -252px; */
    left: calc(30vw);
    margin: 0px;

    }
  `}
`;