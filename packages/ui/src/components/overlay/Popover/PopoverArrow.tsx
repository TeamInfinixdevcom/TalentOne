import React from "react";

import { arrowStyles } from "./Popover.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface PopoverArrowProps
  extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
}

export const PopoverArrow = ({
  style,
  ...props
}: PopoverArrowProps) => (
  <div
    style={{
      ...arrowStyles,
      ...style,
    }}
    {...props}
  />
);

PopoverArrow.displayName = "PopoverArrow";
