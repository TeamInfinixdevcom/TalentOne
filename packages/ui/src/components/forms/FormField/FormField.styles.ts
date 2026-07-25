import type { CSSProperties } from "react";

import {
  colors,
  spacing,
  typography,
} from "../../../tokens";

export const formFieldStyles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: spacing[2],
  width: "100%",
};

export const labelStyles: CSSProperties = {
  color: colors.text.primary,
  fontFamily: typography.fontFamily.sans,
  fontSize: typography.fontSize.sm,
  fontWeight: typography.fontWeight.medium,
};

export const helperTextStyles: CSSProperties = {
  color: colors.text.secondary,
  fontFamily: typography.fontFamily.sans,
  fontSize: typography.fontSize.xs,
};

export const errorTextStyles: CSSProperties = {
  color: colors.danger[500],
  fontFamily: typography.fontFamily.sans,
  fontSize: typography.fontSize.xs,
};
