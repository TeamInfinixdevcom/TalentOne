import type { CSSProperties } from "react";

import {
  colors,
  radius,
  shadows,
  spacing,
  typography,
} from "../../../tokens";

export const dropdownStyles: CSSProperties = {
  position: "relative",
  display: "inline-flex",
};

export const triggerStyles: CSSProperties = {
  display: "inline-flex",
  cursor: "pointer",
};

export const contentStyles: CSSProperties = {
  position: "absolute",
  top: "100%",
  left: 0,
  minWidth: 220,
  marginTop: spacing[2],
  padding: spacing[2],
  background: colors.surface.primary,
  border: `1px solid ${colors.border.default}`,
  borderRadius: radius.md,
  boxShadow: shadows.lg,
  zIndex: 1000,
};

export const itemStyles: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: `${spacing[2]} ${spacing[3]}`,
  borderRadius: radius.sm,
  cursor: "pointer",
  color: colors.text.primary,
  fontSize: typography.fontSize.sm,
  transition: "background-color .2s ease",
};

export const labelStyles: CSSProperties = {
  padding: `${spacing[2]} ${spacing[3]}`,
  fontWeight: typography.fontWeight.semibold,
  fontSize: typography.fontSize.sm,
  color: colors.text.secondary,
};

export const separatorStyles: CSSProperties = {
  border: 0,
  borderTop: `1px solid ${colors.border.default}`,
  margin: `${spacing[2]} 0`,
};

export const shortcutStyles: CSSProperties = {
  marginLeft: spacing[6],
  color: colors.text.muted,
  fontSize: typography.fontSize.xs,
};

export const groupStyles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
};
