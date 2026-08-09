import type {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

export interface HoverCardProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  style?: CSSProperties;
}
