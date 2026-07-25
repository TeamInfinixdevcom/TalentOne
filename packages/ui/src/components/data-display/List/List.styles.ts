import type { CSSProperties } from "react";

import {
  colors,
  radius,
  shadows,
  spacing,
  typography,
} from "../../../tokens";

export const listStyles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  margin: 0,
  padding: 0,
  listStyle: "none",
  backgroundColor: colors.surface.primary,
  border: `1px solid ${colors.border.default}`,
  borderRadius: radius.md,
  boxShadow: shadows.sm,
  overflow: "hidden",
};

export const headerStyles: CSSProperties = {
  padding: spacing[4],
  fontWeight: typography.fontWeight.semibold,
  fontSize: typography.fontSize.base,
  color: colors.text.primary,
  borderBottom: `1px solid ${colors.border.default}`,
  backgroundColor: colors.surface.secondary,
};

export const itemStyles: CSSProperties = {
  display: "flex",
  alignItems: "center",
  padding: spacing[4],
  color: colors.text.primary,
  borderBottom: `1px solid ${colors.border.default}`,
};

export const footerStyles: CSSProperties = {
  padding: spacing[4],
  color: colors.text.secondary,
  fontSize: typography.fontSize.sm,
  backgroundColor: colors.surface.secondary,
  borderTop: `1px solid ${colors.border.default}`,
};
