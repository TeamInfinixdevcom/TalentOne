import React from "react";

import { timelineStyles } from "./Timeline.styles";

import type { TimelineProps } from "./Timeline.types";

export const Timeline = ({
  children,
  style,
  ...props
}: TimelineProps) => {
  return (
    <div
      style={{
        ...timelineStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

Timeline.displayName = "Timeline";
