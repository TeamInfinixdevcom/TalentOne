import React from "react";

import { contentStyles } from "./Popover.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface PopoverContentProps
  extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
}

export const PopoverContent = ({
  children,
  style,
  ...props
}: PopoverContentProps) => (
  <div
    style={{
      ...contentStyles,
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
);

PopoverContent.displayName = "PopoverContent";
