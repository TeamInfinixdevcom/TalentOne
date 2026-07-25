import React from "react";

import {
  colors,
  spacing,
  typography,
} from "../../../tokens";

import type { TimelineTimestampProps } from "./Timeline.types";

export const TimelineTimestamp = ({
  children,
  style,
  ...props
}: TimelineTimestampProps) => {
  return (
    <div
      style={{
        marginBottom: spacing[1],
        color: colors.text.muted,
        fontSize: typography.fontSize.xs,
        fontWeight: typography.fontWeight.medium,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

TimelineTimestamp.displayName = "TimelineTimestamp";
