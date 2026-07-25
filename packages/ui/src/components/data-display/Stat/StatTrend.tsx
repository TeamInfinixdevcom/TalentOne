import React from "react";

import {
  getTrendColor,
  getTrendIcon,
  statTrendStyles,
} from "./Stat.styles";

import type { StatTrendProps } from "./Stat.types";

export const StatTrend = ({
  value,
  direction = "neutral",
  style,
  ...props
}: StatTrendProps) => {
  return (
    <div
      style={{
        ...statTrendStyles,
        color: getTrendColor(direction),
        ...style,
      }}
      {...props}
    >
      <span>{getTrendIcon(direction)}</span>

      <span>{value}</span>
    </div>
  );
};

StatTrend.displayName = "StatTrend";
