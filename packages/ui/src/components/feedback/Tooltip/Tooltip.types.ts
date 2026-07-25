import {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

export type TooltipPlacement =
  | "top"
  | "bottom"
  | "left"
  | "right";

export interface TooltipProps
  extends HTMLAttributes<HTMLDivElement> {
  message: ReactNode;
  children: ReactNode;
  placement?: TooltipPlacement;
  style?: CSSProperties;
}
