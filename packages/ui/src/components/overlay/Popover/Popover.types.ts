import type {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

export interface PopoverProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  style?: CSSProperties;
}
