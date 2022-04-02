import styled from "styled-components";
import { motion } from "framer-motion";

export const InputStyled = styled.input`
  text-align: center;
  padding: 10px;

  width: 90%;
  max-width: 200px;

  border: none;
  border-bottom: 2px solid ${(props) => props.color};

  ::placeholder {
    font-weight: 600;
    color: #b7b3f1;
  }

  :focus {
    outline: none;
  }
`;

export const LabelStyled = styled(motion.label)`
  font-family: "Montserrat";
  font-weight: 600;
  text-align: center;
  color: #817be7;
`;
