import {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

export type AlertVariant =
  | "info"
  | "success"
  | "warning"
  | "error";

export interface AlertProps
  extends HTMLAttributes<HTMLDivElement> {
  title?: ReactNode;
  children: ReactNode;
  variant?: AlertVariant;
  style?: CSSProperties;
}
