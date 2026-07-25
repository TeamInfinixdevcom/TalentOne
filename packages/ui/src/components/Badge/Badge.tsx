import React from "react";

import {
  badgeBaseStyles,
  badgeSizes,
  badgeVariants,
} from "./Badge.styles";
import type { BadgeProps } from "./Badge.types";

export const Badge = ({
  children,
  variant = "primary",
  size = "md",
  style,
  ...props
}: BadgeProps) => {
  const badgeStyle = {
    ...badgeBaseStyles,
    ...badgeSizes[size],
    ...badgeVariants[variant],
    ...style,
  };

  return (
    <span style={badgeStyle} {...props}>
      {children}
    </span>
  );
};

Badge.displayName = "Badge";
