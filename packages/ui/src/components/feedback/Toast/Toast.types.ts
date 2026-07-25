import {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

export type ToastVariant =
  | "info"
  | "success"
  | "warning"
  | "error";

export interface ToastProps
  extends HTMLAttributes<HTMLDivElement> {
  heading?: ReactNode;
  children: ReactNode;
  variant?: ToastVariant;
  closable?: boolean;
  onClose?: () => void;
  style?: CSSProperties;
}
