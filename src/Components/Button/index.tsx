import { ButtonStyled } from "./styles";
import { ButtonProps } from "../../Interfaces/ButtonProps";

export function ButtonPage({
  backgroundColor,
  color,
  type,
  children,
  onClick,
}: ButtonProps) {
  return (
    <ButtonStyled
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4 }}
      color={color}
      backgroundColor={backgroundColor}
      type={type}
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  );
}
