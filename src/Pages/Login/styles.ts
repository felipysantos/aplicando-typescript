import styled from "styled-components";

// ESTILO PRINCIPAL DA PAGE
export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  width: 100vw;
  min-width: 320px;

  height: 100vh;
  min-height: 600px;

  background: linear-gradient(90deg, #3c35b0, #4b43dd, #716bf9);
`;

// ESTILO DO FORMULÁRIO
export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 40vw;
  min-width: 320px;
  max-width: 400px;

  height: 50vh;
  min-height: 300px;
  max-height: 340px;
  background-color: #fff;
  box-shadow: 0 8px 32px 0 #fff;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const SummaryStyled = styled.summary`
  font-size: 32px;
  letter-spacing: 1px;
  font-weight: 600;
  color: #817be7;
  font-family: "Montserrat";
`;
