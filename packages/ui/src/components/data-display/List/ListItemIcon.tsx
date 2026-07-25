import React from "react";

import { spacing, colors } from "../../../tokens";
import type { CSSProperties, HTMLAttributes } from "react";

export interface ListItemIconProps
  extends HTMLAttributes<HTMLSpanElement> {
  style?: CSSProperties;
}

const iconStyles: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: spacing[3],
  color: colors.text.secondary,
  flexShrink: 0,
};

export const ListItemIcon = ({
  children,
  style,
  ...props
}: ListItemIconProps) => {
  return (
    <span
      style={{
        ...iconStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  );
};

ListItemIcon.displayName = "ListItemIcon";
