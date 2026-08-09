import type {
  CSSProperties,
  LabelHTMLAttributes,
  ReactNode,
} from "react";

export interface LabelProps
  extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  required?: boolean;
  style?: CSSProperties;
}
