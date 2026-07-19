import { CSSProperties, InputHTMLAttributes } from "react";

export type InputVariant =
  | "default"
  | "filled"
  | "outlined";

export type InputSize =
  | "sm"
  | "md"
  | "lg";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: InputVariant;
  size?: InputSize;
  style?: CSSProperties;
}
