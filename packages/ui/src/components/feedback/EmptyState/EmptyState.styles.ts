import type { CSSProperties } from "react";

import {
  colors,
  radius,
  spacing,
  typography,
} from "../../../tokens";

export const emptyStateStyles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  width: "100%",
  padding: spacing[8],
  borderRadius: radius.lg,
  backgroundColor: colors.surface.primary,
  border: `1px dashed ${colors.border.default}`,
  boxSizing: "border-box",
};

export const iconStyles: CSSProperties = {
  fontSize: "56px",
  marginBottom: spacing[4],
  color: colors.text.muted,
};

export const titleStyles: CSSProperties = {
  fontFamily: typography.fontFamily.sans,
  fontSize: typography.fontSize.lg,
  fontWeight: typography.fontWeight.bold,
  color: colors.text.primary,
  marginBottom: spacing[2],
};

export const descriptionStyles: CSSProperties = {
  fontFamily: typography.fontFamily.sans,
  fontSize: typography.fontSize.sm,
  color: colors.text.secondary,
  maxWidth: "420px",
  marginBottom: spacing[5],
};

export const actionStyles: CSSProperties = {
  marginTop: spacing[2],
};
