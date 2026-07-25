import React from "react";

import { timelineItemStyles } from "./Timeline.styles";
import type { TimelineItemProps } from "./Timeline.types";

export const TimelineItem = ({
  children,
  style,
  ...props
}: TimelineItemProps) => {
  return (
    <div
      style={{
        ...timelineItemStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

TimelineItem.displayName = "TimelineItem";
