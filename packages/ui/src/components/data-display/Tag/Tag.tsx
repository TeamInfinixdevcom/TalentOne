import React from "react";

import {
  getTagVariantStyles,
  tagStyles,
} from "./Tag.styles";

import type { TagProps } from "./Tag.types";

export const Tag = ({
  children,
  variant = "subtle",
  colorScheme = "primary",
  style,
  ...props
}: TagProps) => {
  return (
    <div
      style={{
        ...tagStyles,
        ...getTagVariantStyles(
          variant,
          colorScheme
        ),
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

Tag.displayName = "Tag";
