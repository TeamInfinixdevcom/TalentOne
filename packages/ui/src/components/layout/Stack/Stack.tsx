import React, { CSSProperties } from "react";

import { stackBaseStyles } from "./Stack.styles";
import type { StackProps } from "./Stack.types";

export const Stack = ({
  children,
  direction = "vertical",
  spacing,
  align = "stretch",
  justify = "flex-start",
  style,
  ...props
}: StackProps) => {
  const stackStyle: CSSProperties = {
    ...stackBaseStyles,
    flexDirection: direction === "vertical" ? "column" : "row",
    alignItems: align,
    justifyContent: justify,
    ...(spacing !== undefined ? { gap: spacing } : {}),
    ...style,
  };

  return (
    <div
      style={stackStyle}
      {...props}
    >
      {children}
    </div>
  );
};

Stack.displayName = "Stack";
