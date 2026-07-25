import React from "react";

import { popoverStyles } from "./Popover.styles";
import type { PopoverProps } from "./Popover.types";

export const Popover = ({
  children,
  style,
  ...props
}: PopoverProps) => (
  <div
    style={{
      ...popoverStyles,
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
);

Popover.displayName = "Popover";
