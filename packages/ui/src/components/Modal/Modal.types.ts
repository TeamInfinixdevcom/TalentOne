import { CSSProperties, HTMLAttributes, ReactNode } from "react";

export interface ModalProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  open: boolean;
  style?: CSSProperties;
}
