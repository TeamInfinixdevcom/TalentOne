import React from "react";

import { headerStyles } from "./Popover.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface PopoverHeaderProps
  extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
}

export const PopoverHeader = ({
  children,
  style,
  ...props
}: PopoverHeaderProps) => (
  <div
    style={{
      ...headerStyles,
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
);

PopoverHeader.displayName = "PopoverHeader";
