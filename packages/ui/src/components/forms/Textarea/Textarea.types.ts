import {
  CSSProperties,
  TextareaHTMLAttributes,
} from "react";

export type TextareaVariant =
  | "outlined"
  | "filled";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: TextareaVariant;
  resize?: "none" | "both" | "horizontal" | "vertical";
  style?: CSSProperties;
}
