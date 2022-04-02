import styled from "styled-components";
import { motion } from "framer-motion";

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

  background: linear-gradient(90deg, #716bf9, #3c35b0, #4b43dd);
`;

// ESTILO DO FORMULÁRIO
export const FormStyled = styled(motion.form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 40vw;
  min-width: 320px;
  max-width: 400px;

  height: 100vh;
  min-height: 300px;
  max-height: ${(props) => (props.className ? "500px" : "360px")};

  background-color: #fff;
  box-shadow: 0 8px 32px 0 #fff;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const SummaryStyled = styled(motion.summary)`
  font-size: 32px;
  letter-spacing: 1px;
  font-weight: 600;
  color: #817be7;
  font-family: "Montserrat";
`;

export const PStyled = styled(motion.p)`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 14px;
`;


