import type {
  CSSProperties,
  InputHTMLAttributes,
  ReactNode,
} from "react";

export interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: ReactNode;
  style?: CSSProperties;
}
