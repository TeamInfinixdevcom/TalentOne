import React from "react";

import { flexBaseStyles } from "./Flex.styles";
import type { FlexProps } from "./Flex.types";

export const Flex = ({
  children,
  direction = "row",
  justify = "flex-start",
  align = "stretch",
  wrap = "nowrap",
  gap,
  style,
  ...props
}: FlexProps) => {
  const flexStyle = {
    ...flexBaseStyles,
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    flexWrap: wrap,
    ...(gap !== undefined && { gap }),
    ...style,
  };

  return (
    <div
      style={flexStyle}
      {...props}
    >
      {children}
    </div>
  );
};

Flex.displayName = "Flex";
