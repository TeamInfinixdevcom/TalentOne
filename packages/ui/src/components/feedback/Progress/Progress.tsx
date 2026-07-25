import React from "react";

import {
  progressContainerStyles,
  progressLabelStyles,
  progressTrackStyles,
  progressVariants,
} from "./Progress.styles";

import type { ProgressProps } from "./Progress.types";

export const Progress = ({
  value,
  max = 100,
  label,
  showValue = true,
  variant = "primary",
  style,
  ...props
}: ProgressProps) => {
  const percentage = Math.min(
    Math.max((value / max) * 100, 0),
    100
  );

  return (
    <div
      style={{
        ...progressContainerStyles,
        ...style,
      }}
      {...props}
    >
      {(label || showValue) && (
        <div style={progressLabelStyles}>
          <span>{label}</span>

          {showValue && (
            <span>{Math.round(percentage)}%</span>
          )}
        </div>
      )}

      <div style={progressTrackStyles}>
        <div
          style={{
            height: "100%",
            width: `${percentage}%`,
            transition: "width .3s ease",
            ...progressVariants[variant],
          }}
        />
      </div>
    </div>
  );
};

Progress.displayName = "Progress";
