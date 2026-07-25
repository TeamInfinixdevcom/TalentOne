import type { CSSProperties } from "react";

import {
  colors,
  radius,
  shadows,
  spacing,
  typography,
} from "../../../tokens";

export const popoverStyles: CSSProperties = {
  position: "relative",
  display: "inline-flex",
};

export const triggerStyles: CSSProperties = {
  display: "inline-flex",
  cursor: "pointer",
};

export const contentStyles: CSSProperties = {
  position: "absolute",
  top: "calc(100% + 8px)",
  left: 0,
  minWidth: 280,
  background: colors.surface.primary,
  border: `1px solid ${colors.border.default}`,
  borderRadius: radius.md,
  boxShadow: shadows.lg,
  overflow: "hidden",
  zIndex: 1000,
};

export const headerStyles: CSSProperties = {
  padding: spacing[4],
  borderBottom: `1px solid ${colors.border.default}`,
};

export const bodyStyles: CSSProperties = {
  padding: spacing[4],
};

export const footerStyles: CSSProperties = {
  padding: spacing[4],
  borderTop: `1px solid ${colors.border.default}`,
};

export const arrowStyles: CSSProperties = {
  position: "absolute",
  top: -6,
  left: 20,
  width: 12,
  height: 12,
  background: colors.surface.primary,
  borderTop: `1px solid ${colors.border.default}`,
  borderLeft: `1px solid ${colors.border.default}`,
  transform: "rotate(45deg)",
};

export const titleStyles: CSSProperties = {
  fontWeight: typography.fontWeight.semibold,
  fontSize: typography.fontSize.base,
  color: colors.text.primary,
};

export const descriptionStyles: CSSProperties = {
  marginTop: spacing[2],
  color: colors.text.secondary,
  fontSize: typography.fontSize.sm,
};
