import React from "react";

import { timelineConnectorStyles } from "./Timeline.styles";
import type { TimelineConnectorProps } from "./Timeline.types";

export const TimelineConnector = ({
  style,
  ...props
}: TimelineConnectorProps) => {
  return (
    <div
      style={{
        ...timelineConnectorStyles,
        ...style,
      }}
      {...props}
    />
  );
};

TimelineConnector.displayName = "TimelineConnector";
