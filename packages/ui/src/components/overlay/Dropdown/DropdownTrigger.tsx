import React from "react";

import { triggerStyles } from "./Dropdown.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface DropdownTriggerProps
  extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
}

export const DropdownTrigger = ({
  children,
  style,
  ...props
}: DropdownTriggerProps) => (
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

DropdownTrigger.displayName = "DropdownTrigger";
