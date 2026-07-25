import type { CSSProperties } from "react";

import {
  colors,
  spacing,
  typography,
} from "../../../tokens";

export const switchContainerStyles: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: spacing[2],
  cursor: "pointer",
};

export const switchStyles: CSSProperties = {
  width: "42px",
  height: "22px",
  cursor: "pointer",
  accentColor: colors.primary[500],
};

export const switchLabelStyles: CSSProperties = {
  color: colors.text.primary,
  fontFamily: typography.fontFamily.sans,
  fontSize: typography.fontSize.base,
  cursor: "pointer",
};
