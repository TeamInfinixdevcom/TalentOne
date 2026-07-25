import React from "react";

import { statLabelStyles } from "./Stat.styles";
import type { StatLabelProps } from "./Stat.types";

export const StatLabel = ({
  children,
  style,
  ...props
}: StatLabelProps) => {
  return (
    <div
      style={{
        ...statLabelStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

StatLabel.displayName = "StatLabel";
