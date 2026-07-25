import React from "react";

import type { TimelineIconProps } from "./Timeline.types";

export const TimelineIcon = ({
  children,
  style,
  ...props
}: TimelineIconProps) => {
  return (
    <span
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  );
};

TimelineIcon.displayName = "TimelineIcon";
