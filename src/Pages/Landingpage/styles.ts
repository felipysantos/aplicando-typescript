import styled from "styled-components";
import { motion } from "framer-motion";

// ESTILO PRINCIPAL DA PAGE
export const ContainerStyled = styled(motion.div)`
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

export const ButtonContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50vw;
  min-width: 250px;
  max-width: 320px;
`;

export const SummaryStyled = styled(motion.h1)`
  font-size: 48px;
  letter-spacing: 1px;
  margin: 0;
  font-weight: 600;
  color: ${(props) => props.color};
  font-family: "Montserrat";
  `;

export const PStyled = styled(motion.p)`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 22px;
  color: ${(props) => props.color};
`;
