import type { CSSProperties } from "react";
import {
  colors,
  spacing,
  typography,
} from "../../../tokens";

export const checkboxContainerStyles: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: spacing[2],
  cursor: "pointer",
};

export const checkboxStyles: CSSProperties = {
  width: "16px",
  height: "16px",
  cursor: "pointer",
  accentColor: colors.primary[500],
};

export const checkboxLabelStyles: CSSProperties = {
  color: colors.text.primary,
  fontFamily: typography.fontFamily.sans,
  fontSize: typography.fontSize.base,
  cursor: "pointer",
};
