import styled from "styled-components";
import { ButtonProps } from "../../Interfaces/ButtonProps";
import { motion } from "framer-motion";
export const ButtonStyled = styled(motion.button)<ButtonProps>`
  width: auto;
  height: auto;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;

  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 18px;
  font-weight: 800;
  font-family: "Montserrat";

  :hover{
    filter: brightness(1.2);
    box-shadow: 0 0 10px #817be7;
  }
  transition: all 0.3s;

  color: ${(props) => props.color};
  cursor: pointer;
  background-color: ${(props) => props.backgroundColor};
`;
