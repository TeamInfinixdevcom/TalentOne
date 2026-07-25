import React from "react";

import { statValueStyles } from "./Stat.styles";
import type { StatValueProps } from "./Stat.types";

export const StatValue = ({
  children,
  style,
  ...props
}: StatValueProps) => {
  return (
    <div
      style={{
        ...statValueStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

StatValue.displayName = "StatValue";
