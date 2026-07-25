import React from "react";

import { contentStyles } from "./Dropdown.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface DropdownContentProps
  extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
}

export const DropdownContent = ({
  children,
  style,
  ...props
}: DropdownContentProps) => (
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

DropdownContent.displayName = "DropdownContent";
