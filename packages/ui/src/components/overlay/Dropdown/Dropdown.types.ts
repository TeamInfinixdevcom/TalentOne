import type {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

export interface DropdownProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  style?: CSSProperties;
}
