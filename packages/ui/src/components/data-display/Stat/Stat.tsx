import React from "react";

import { statStyles } from "./Stat.styles";
import type { StatProps } from "./Stat.types";

export const Stat = ({
  children,
  style,
  ...props
}: StatProps) => {
  return (
    <div
      style={{
        ...statStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

Stat.displayName = "Stat";
