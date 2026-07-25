import React from "react";

import { arrowStyles } from "./HoverCard.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface HoverCardArrowProps
  extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
}

export const HoverCardArrow = ({
  style,
  ...props
}: HoverCardArrowProps) => (
  <div
    style={{
      ...arrowStyles,
      ...style,
    }}
    {...props}
  />
);

HoverCardArrow.displayName = "HoverCardArrow";
