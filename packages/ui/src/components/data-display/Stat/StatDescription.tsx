import React from "react";

import { statDescriptionStyles } from "./Stat.styles";
import type { StatDescriptionProps } from "./Stat.types";

export const StatDescription = ({
  children,
  style,
  ...props
}: StatDescriptionProps) => {
  return (
    <div
      style={{
        ...statDescriptionStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

StatDescription.displayName = "StatDescription";
