import {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

export interface NavbarProps
  extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  style?: CSSProperties;
}
