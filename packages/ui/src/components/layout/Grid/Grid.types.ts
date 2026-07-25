import { CSSProperties, HTMLAttributes, ReactNode } from "react";

export interface GridProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  columns?: number;
  gap?: number | string;
  style?: CSSProperties;
}
