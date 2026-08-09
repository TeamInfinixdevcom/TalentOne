import type {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

export interface FormFieldProps
  extends HTMLAttributes<HTMLDivElement> {
  label?: ReactNode;
  helperText?: ReactNode;
  error?: ReactNode;
  required?: boolean;
  children: ReactNode;
  style?: CSSProperties;
}
