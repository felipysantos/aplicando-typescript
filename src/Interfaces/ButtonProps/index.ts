import { MouseEventHandler } from "react";

export interface ButtonProps {
  type?: "submit" | "reset" | "button";
  children: string;
  backgroundColor?: string;
  hoverColor?: string;
  color: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
