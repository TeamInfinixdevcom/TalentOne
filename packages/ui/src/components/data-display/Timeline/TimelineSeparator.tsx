import React from "react";

import { timelineSeparatorStyles } from "./Timeline.styles";
import type { TimelineSeparatorProps } from "./Timeline.types";

export const TimelineSeparator = ({
  children,
  style,
  ...props
}: TimelineSeparatorProps) => {
  return (
    <div
      style={{
        ...timelineSeparatorStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

TimelineSeparator.displayName = "TimelineSeparator";
