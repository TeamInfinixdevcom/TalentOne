import {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

export interface SidebarProps
  extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  collapsed?: boolean;
  style?: CSSProperties;
}
