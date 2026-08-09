import type {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

export interface DrawerProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  style?: CSSProperties;
}
