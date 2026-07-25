import type { CSSProperties } from "react";

import {
  colors,
  radius,
  spacing,
  typography,
} from "../../../tokens";

import type {
  TagColorScheme,
  TagVariant,
} from "./Tag.types";

export const tagStyles: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: spacing[2],
  padding: `${spacing[1]} ${spacing[3]}`,
  borderRadius: radius.full,
  fontSize: typography.fontSize.sm,
  fontWeight: typography.fontWeight.medium,
  whiteSpace: "nowrap",
  userSelect: "none",
};

export const tagIconStyles: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
};

export const tagCloseButtonStyles: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  background: "transparent",
  cursor: "pointer",
  padding: 0,
  fontSize: typography.fontSize.sm,
};

const palette = {
  primary: {
    solid: colors.primary[500],
    subtle: colors.primary[100],
    text: colors.primary[700],
    border: colors.primary[300],
  },

  success: {
    solid: colors.success[500],
    subtle: colors.success[100],
    text: colors.success[700],
    border: colors.success[300],
  },

  warning: {
    solid: colors.warning[500],
    subtle: colors.warning[100],
    text: colors.warning[700],
    border: colors.warning[300],
  },

  danger: {
    solid: colors.danger[500],
    subtle: colors.danger[100],
    text: colors.danger[700],
    border: colors.danger[300],
  },

  neutral: {
    solid: colors.neutral[600],
    subtle: colors.neutral[100],
    text: colors.neutral[700],
    border: colors.neutral[300],
  },
};

export const getTagVariantStyles = (
  variant: TagVariant,
  colorScheme: TagColorScheme
): CSSProperties => {
  const scheme = palette[colorScheme];

  switch (variant) {
    case "solid":
      return {
        backgroundColor: scheme.solid,
        color: colors.white,
      };

    case "outline":
      return {
        backgroundColor: "transparent",
        color: scheme.text,
        border: `1px solid ${scheme.border}`,
      };

    default:
      return {
        backgroundColor: scheme.subtle,
        color: scheme.text,
      };
  }
};
