import React from "react";

import { shortcutStyles } from "./Dropdown.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface DropdownShortcutProps
  extends HTMLAttributes<HTMLSpanElement> {
  style?: CSSProperties;
}

export const DropdownShortcut = ({
  children,
  style,
  ...props
}: DropdownShortcutProps) => (
  <span
    style={{
      ...shortcutStyles,
      ...style,
    }}
    {...props}
  >
    {children}
  </span>
);

DropdownShortcut.displayName = "DropdownShortcut";
