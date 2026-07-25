import {
  CSSProperties,
  InputHTMLAttributes,
  ReactNode,
} from "react";

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: ReactNode;
  style?: CSSProperties;
}
