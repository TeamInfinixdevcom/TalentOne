import type { CSSProperties } from "react";

import {
  colors,
  radius,
  spacing,
  typography,
} from "../../../tokens";

import type { AlertVariant } from "./Alert.types";

export const alertBaseStyles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: spacing[2],
  width: "100%",
  padding: spacing[4],
  borderRadius: radius.md,
  borderWidth: "1px",
  borderStyle: "solid",
  boxSizing: "border-box",
};

export const alertVariants: Record<
  AlertVariant,
  CSSProperties
> = {
  info: {
    backgroundColor: colors.primary[50],
    borderColor: colors.primary[500],
    color: colors.primary[700],
  },

  success: {
    backgroundColor: colors.success[50],
    borderColor: colors.success[500],
    color: colors.success[700],
  },

  warning: {
    backgroundColor: colors.warning[50],
    borderColor: colors.warning[500],
    color: colors.warning[700],
  },

  error: {
    backgroundColor: colors.danger[50],
    borderColor: colors.danger[500],
    color: colors.danger[700],
  },
};

export const titleStyles: CSSProperties = {
  fontFamily: typography.fontFamily.sans,
  fontSize: typography.fontSize.base,
  fontWeight: typography.fontWeight.bold,
};

export const contentStyles: CSSProperties = {
  fontFamily: typography.fontFamily.sans,
  fontSize: typography.fontSize.sm,
};
