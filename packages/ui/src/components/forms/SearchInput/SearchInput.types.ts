import {
  CSSProperties,
  InputHTMLAttributes,
} from "react";

export interface SearchInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  style?: CSSProperties;
}
