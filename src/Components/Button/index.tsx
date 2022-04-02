import { ButtonStyled } from "./styles";
import { ButtonProps } from "../../Interfaces/ButtonProps";

export function ButtonPage({
  backgroundColor,
  color,
  type,
  children,
}: ButtonProps) {
  return (
    <ButtonStyled color={color} backgroundColor={backgroundColor} type={type}>
      {children}
    </ButtonStyled>
  );
}
