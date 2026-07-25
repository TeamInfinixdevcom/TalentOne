import React from "react";

import { getTimelineDotStyles } from "./Timeline.styles";
import type { TimelineDotProps } from "./Timeline.types";

export const TimelineDot = ({
  colorScheme = "primary",
  style,
  ...props
}: TimelineDotProps) => {
  return (
    <div
      style={{
        ...getTimelineDotStyles(colorScheme),
        ...style,
      }}
      {...props}
    />
  );
};

TimelineDot.displayName = "TimelineDot";
