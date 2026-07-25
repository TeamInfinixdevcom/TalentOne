import React from "react";

import { timelineContentStyles } from "./Timeline.styles";
import type { TimelineContentProps } from "./Timeline.types";

export const TimelineContent = ({
  children,
  style,
  ...props
}: TimelineContentProps) => {
  return (
    <div
      style={{
        ...timelineContentStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

TimelineContent.displayName = "TimelineContent";
