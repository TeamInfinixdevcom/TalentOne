import React from "react";

import { dropdownStyles } from "./Dropdown.styles";
import type { DropdownProps } from "./Dropdown.types";

export const Dropdown = ({
  children,
  style,
  ...props
}: DropdownProps) => (
  <div
    style={{
      ...dropdownStyles,
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
);

Dropdown.displayName = "Dropdown";
