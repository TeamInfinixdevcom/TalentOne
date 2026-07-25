import React from "react";

import { bodyStyles } from "./Popover.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface PopoverBodyProps
  extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
}

export const PopoverBody = ({
  children,
  style,
  ...props
}: PopoverBodyProps) => (
  <div
    style={{
      ...bodyStyles,
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
);

PopoverBody.displayName = "PopoverBody";
