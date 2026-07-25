import type { CSSProperties } from "react";

import {
  colors,
  radius,
  shadows,
  spacing,
  typography,
} from "../../../tokens";

export const accordionStyles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  backgroundColor: colors.surface.primary,
  border: `1px solid ${colors.border.default}`,
  borderRadius: radius.md,
  overflow: "hidden",
  boxShadow: shadows.sm,
};

export const itemStyles: CSSProperties = {
  borderBottom: `1px solid ${colors.border.default}`,
};

export const headerStyles: CSSProperties = {
  display: "flex",
  width: "100%",
};

export const triggerStyles: CSSProperties = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: spacing[4],
  background: "transparent",
  border: "none",
  cursor: "pointer",
  color: colors.text.primary,
  fontSize: typography.fontSize.base,
  fontWeight: typography.fontWeight.medium,
  textAlign: "left",
  transition: "background-color 0.2s ease",
};

export const triggerHoverStyles: CSSProperties = {
  backgroundColor: colors.surface.secondary,
};

export const contentStyles: CSSProperties = {
  padding: spacing[4],
  color: colors.text.secondary,
  fontSize: typography.fontSize.sm,
  borderTop: `1px solid ${colors.border.default}`,
  backgroundColor: colors.surface.primary,
};

export const chevronStyles: CSSProperties = {
  marginLeft: spacing[2],
  color: colors.text.secondary,
  transition: "transform 0.2s ease",
};

export const lastItemStyles: CSSProperties = {
  borderBottom: "none",
};
