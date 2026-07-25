import {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

export interface ContextMenuProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  style?: CSSProperties;
}
