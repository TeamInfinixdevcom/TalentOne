import type {
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
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title?: ReactNode;
  children: ReactNode;
  variant?: AlertVariant;
  style?: CSSProperties;
}
