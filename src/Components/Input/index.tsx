import { InputHTMLAttributes } from "react";
import { InputStyled, LabelStyled } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder?: string;
  children: any;
  background: string;
  id?: string;
}

export function InputPage({
  type,
  id,
  background,
  placeholder,
  children,
  ...rest
}: InputProps) {
  return (
    <LabelStyled
      initial={{ x: "50px", opacity: 0 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: id === "1" ? 0.2 : id === "2" ? 0.3 : id === "3" ? 0.4 : 0.6,
      }}
    >
      {placeholder}
      <InputStyled color={background} type={type} {...rest} {...children} />
    </LabelStyled>
  );
}
