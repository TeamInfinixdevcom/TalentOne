import React from "react";

import { tagIconStyles } from "./Tag.styles";
import type { TagIconProps } from "./Tag.types";

export const TagIcon = ({
  children,
  style,
  ...props
}: TagIconProps) => {
  return (
    <span
      style={{
        ...tagIconStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  );
};

TagIcon.displayName = "TagIcon";
