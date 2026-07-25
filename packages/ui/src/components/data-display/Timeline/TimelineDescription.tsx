import React from "react";

import { timelineDescriptionStyles } from "./Timeline.styles";
import type { TimelineDescriptionProps } from "./Timeline.types";

export const TimelineDescription = ({
  children,
  style,
  ...props
}: TimelineDescriptionProps) => {
  return (
    <p
      style={{
        ...timelineDescriptionStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </p>
  );
};

TimelineDescription.displayName = "TimelineDescription";
