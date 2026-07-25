import React from "react";

import { tagCloseButtonStyles } from "./Tag.styles";
import type { TagCloseButtonProps } from "./Tag.types";

export const TagCloseButton = ({
  style,
  children,
  ...props
}: TagCloseButtonProps) => {
  return (
    <button
      type="button"
      aria-label="Remove tag"
      style={{
        ...tagCloseButtonStyles,
        ...style,
      }}
      {...props}
    >
      {children ?? "×"}
    </button>
  );
};

TagCloseButton.displayName = "TagCloseButton";
