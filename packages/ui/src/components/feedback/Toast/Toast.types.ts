import type {
  CSSProperties,
  OutputHTMLAttributes,
  ReactNode,
} from "react";

export type ToastVariant =
  | "info"
  | "success"
  | "warning"
  | "error";

export interface ToastProps
  extends OutputHTMLAttributes<HTMLOutputElement> {
  heading?: ReactNode;
  children: ReactNode;
  variant?: ToastVariant;
  closable?: boolean;
  onClose?: () => void;
  style?: CSSProperties;
}
