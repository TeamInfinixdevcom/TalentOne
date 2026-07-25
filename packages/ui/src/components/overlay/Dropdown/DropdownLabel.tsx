import React from "react";

import { labelStyles } from "./Dropdown.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface DropdownLabelProps
  extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
}

export const DropdownLabel = ({
  children,
  style,
  ...props
}: DropdownLabelProps) => (
  <div
    style={{
      ...labelStyles,
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
);

DropdownLabel.displayName = "DropdownLabel";
