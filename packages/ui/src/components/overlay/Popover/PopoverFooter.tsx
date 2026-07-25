import React from "react";

import { footerStyles } from "./Popover.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface PopoverFooterProps
  extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
}

export const PopoverFooter = ({
  children,
  style,
  ...props
}: PopoverFooterProps) => (
  <div
    style={{
      ...footerStyles,
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
);

PopoverFooter.displayName = "PopoverFooter";
