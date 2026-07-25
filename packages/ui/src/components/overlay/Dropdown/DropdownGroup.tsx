import React from "react";

import { groupStyles } from "./Dropdown.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface DropdownGroupProps
  extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
}

export const DropdownGroup = ({
  children,
  style,
  ...props
}: DropdownGroupProps) => (
  <div
    style={{
      ...groupStyles,
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
);

DropdownGroup.displayName = "DropdownGroup";
