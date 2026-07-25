import React from "react";

import {
  colors,
  spacing,
  typography,
} from "../../../tokens";

import type { TimelineOppositeProps } from "./Timeline.types";

export const TimelineOpposite = ({
  children,
  style,
  ...props
}: TimelineOppositeProps) => {
  return (
    <div
      style={{
        minWidth: 140,
        paddingRight: spacing[4],
        textAlign: "right",
        color: colors.text.secondary,
        fontSize: typography.fontSize.sm,
        fontWeight: typography.fontWeight.medium,
        flexShrink: 0,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

TimelineOpposite.displayName = "TimelineOpposite";
