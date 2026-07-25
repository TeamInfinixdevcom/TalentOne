import React from "react";

import { timelineTitleStyles } from "./Timeline.styles";
import type { TimelineTitleProps } from "./Timeline.types";

export const TimelineTitle = ({
  children,
  style,
  ...props
}: TimelineTitleProps) => {
  return (
    <h4
      style={{
        ...timelineTitleStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </h4>
  );
};

TimelineTitle.displayName = "TimelineTitle";
