import {
  CSSProperties,
  InputHTMLAttributes,
  ReactNode,
} from "react";

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: ReactNode;
  style?: CSSProperties;
}
