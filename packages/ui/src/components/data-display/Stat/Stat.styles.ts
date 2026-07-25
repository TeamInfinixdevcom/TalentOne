import type { CSSProperties } from "react";

import {
  colors,
  radius,
  shadows,
  spacing,
  typography,
} from "../../../tokens";

export const statStyles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: spacing[2],
  padding: spacing[5],
  borderRadius: radius.lg,
  backgroundColor: colors.surface.primary,
  border: `1px solid ${colors.border.default}`,
  boxShadow: shadows.sm,
};

export const statLabelStyles: CSSProperties = {
  color: colors.text.secondary,
  fontSize: typography.fontSize.sm,
  fontWeight: typography.fontWeight.medium,
};

export const statValueStyles: CSSProperties = {
  color: colors.text.primary,
  fontSize: typography.fontSize["3xl"],
  fontWeight: typography.fontWeight.bold,
  lineHeight: 1.2,
};

export const statDescriptionStyles: CSSProperties = {
  color: colors.text.muted,
  fontSize: typography.fontSize.sm,
};

export const statTrendStyles: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: spacing[1],
  fontSize: typography.fontSize.sm,
  fontWeight: typography.fontWeight.semibold,
};

export const getTrendColor = (
  direction: "up" | "down" | "neutral"
): string => {
  switch (direction) {
    case "up":
      return colors.success[500];

    case "down":
      return colors.danger[500];

    default:
      return colors.text.secondary;
  }
};

export const getTrendIcon = (
  direction: "up" | "down" | "neutral"
): string => {
  switch (direction) {
    case "up":
      return "▲";

    case "down":
      return "▼";

    default:
      return "●";
  }
};
