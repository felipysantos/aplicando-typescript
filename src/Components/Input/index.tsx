import { InputHTMLAttributes } from "react";
import { InputStyled, LabelStyled } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder?: string;
  children: any;
}

export function InputPage({
  type,
  placeholder,
  children,
  ...rest
}: InputProps) {
  return (
    <LabelStyled>
      {placeholder}
      <InputStyled
        type={type}
        {...rest}
        {...children}
      />
    </LabelStyled>
  );
}
