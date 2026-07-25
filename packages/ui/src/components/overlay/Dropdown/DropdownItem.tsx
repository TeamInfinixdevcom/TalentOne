import React from "react";

import { itemStyles } from "./Dropdown.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface DropdownItemProps
  extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
}

export const DropdownItem = ({
  children,
  style,
  ...props
}: DropdownItemProps) => (
  <div
    role="menuitem"
    tabIndex={0}
    style={{
      ...itemStyles,
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
);

DropdownItem.displayName = "DropdownItem";
