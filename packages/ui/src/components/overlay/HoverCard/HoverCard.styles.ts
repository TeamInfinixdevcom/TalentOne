import type { CSSProperties } from "react";

import {
  colors,
  radius,
  shadows,
  spacing,
  typography,
} from "../../../tokens";

export const hoverCardStyles: CSSProperties = {
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
  minWidth: 260,
  maxWidth: 340,
  padding: spacing[4],
  background: colors.surface.primary,
  border: `1px solid ${colors.border.default}`,
  borderRadius: radius.md,
  boxShadow: shadows.lg,
  zIndex: 1000,
};

export const arrowStyles: CSSProperties = {
  position: "absolute",
  top: -6,
  left: 24,
  width: 12,
  height: 12,
  background: colors.surface.primary,
  borderTop: `1px solid ${colors.border.default}`,
  borderLeft: `1px solid ${colors.border.default}`,
  transform: "rotate(45deg)",
};

export const titleStyles: CSSProperties = {
  marginBottom: spacing[2],
  fontWeight: typography.fontWeight.semibold,
  fontSize: typography.fontSize.base,
  color: colors.text.primary,
};

export const descriptionStyles: CSSProperties = {
  color: colors.text.secondary,
  fontSize: typography.fontSize.sm,
  lineHeight: 1.5,
};
