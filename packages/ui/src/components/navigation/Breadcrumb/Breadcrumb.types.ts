import {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

export interface BreadcrumbProps
  extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  style?: CSSProperties;
}
