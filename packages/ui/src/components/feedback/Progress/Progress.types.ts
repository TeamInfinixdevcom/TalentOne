import type {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

export type ProgressVariant =
  | "primary"
  | "success"
  | "warning"
  | "danger";

export interface ProgressProps
  extends HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  label?: ReactNode;
  showValue?: boolean;
  variant?: ProgressVariant;
  style?: CSSProperties;
}
