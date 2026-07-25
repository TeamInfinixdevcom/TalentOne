import type { CSSProperties } from "react";

import {
  colors,
  spacing,
  typography,
} from "../../../tokens";

export const radioContainerStyles: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: spacing[2],
  cursor: "pointer",
};

export const radioStyles: CSSProperties = {
  width: "16px",
  height: "16px",
  cursor: "pointer",
  accentColor: colors.primary[500],
};

export const radioLabelStyles: CSSProperties = {
  color: colors.text.primary,
  fontFamily: typography.fontFamily.sans,
  fontSize: typography.fontSize.base,
  cursor: "pointer",
};
