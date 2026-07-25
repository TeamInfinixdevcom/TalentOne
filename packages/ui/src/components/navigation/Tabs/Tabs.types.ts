import {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

export interface TabsProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  style?: CSSProperties;
}
