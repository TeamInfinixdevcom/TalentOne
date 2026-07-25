import React from "react";

import { separatorStyles } from "./Dropdown.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface DropdownSeparatorProps
  extends HTMLAttributes<HTMLHRElement> {
  style?: CSSProperties;
}

export const DropdownSeparator = ({
  style,
  ...props
}: DropdownSeparatorProps) => (
  <hr
    style={{
      ...separatorStyles,
      ...style,
    }}
    {...props}
  />
);

DropdownSeparator.displayName = "DropdownSeparator";
