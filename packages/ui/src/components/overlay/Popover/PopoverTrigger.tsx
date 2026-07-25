import React from "react";

import { triggerStyles } from "./Popover.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface PopoverTriggerProps
  extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
}

export const PopoverTrigger = ({
  children,
  style,
  ...props
}: PopoverTriggerProps) => (
  <div
    style={{
      ...triggerStyles,
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
);

PopoverTrigger.displayName = "PopoverTrigger";
