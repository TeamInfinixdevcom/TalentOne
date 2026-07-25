import {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

export interface PaginationProps
  extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  style?: CSSProperties;
}
