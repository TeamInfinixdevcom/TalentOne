import type { CSSProperties } from "react";

import {
  colors,
  radius,
  shadows,
  spacing,
  typography,
} from "../../../tokens";

export const contextMenuStyles: CSSProperties = {
  position: "relative",
  display: "inline-block",
};

export const triggerStyles: CSSProperties = {
  display: "inline-flex",
};

export const contentStyles: CSSProperties = {
  position: "absolute",
  top: "100%",
  left: 0,
  minWidth: "220px",
  marginTop: spacing[2],
  padding: spacing[2],
  borderRadius: radius.md,
  backgroundColor: colors.surface.primary,
  border: `1px solid ${colors.border.default}`,
  boxShadow: shadows.lg,
  display: "flex",
  flexDirection: "column",
  gap: spacing[1],
  zIndex: 1000,
};

export const itemStyles: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${spacing[2]} ${spacing[3]}`,
  borderRadius: radius.sm,
  cursor: "pointer",
  fontFamily: typography.fontFamily.sans,
  fontSize: typography.fontSize.sm,
  color: colors.text.primary,
  transition: "background-color .2s ease",
};

export const separatorStyles: CSSProperties = {
  width: "100%",
  borderTop: `1px solid ${colors.border.default}`,
  margin: `${spacing[2]} 0`,
};

export const labelStyles: CSSProperties = {
  padding: `${spacing[2]} ${spacing[3]}`,
  fontSize: typography.fontSize.xs,
  fontWeight: typography.fontWeight.semibold,
  color: colors.text.secondary,
};

export const groupStyles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: spacing[1],
};

export const shortcutStyles: CSSProperties = {
  marginLeft: spacing[6],
  fontSize: typography.fontSize.xs,
  color: colors.text.tertiary,
};
