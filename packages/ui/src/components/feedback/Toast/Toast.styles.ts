import type { CSSProperties } from "react";

import {
  colors,
  radius,
  spacing,
  typography,
} from "../../../tokens";

import type { ToastVariant } from "./Toast.types";

export const toastBaseStyles: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: spacing[4],
  width: "100%",
  maxWidth: "420px",
  padding: spacing[4],
  borderRadius: radius.md,
  borderWidth: "1px",
  borderStyle: "solid",
  boxSizing: "border-box",
  boxShadow: "0 8px 24px rgba(15,23,42,.12)",
};

export const toastVariants: Record<
  ToastVariant,
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

export const contentStyles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: spacing[1],
  flex: 1,
};

export const headingStyles: CSSProperties = {
  fontFamily: typography.fontFamily.sans,
  fontSize: typography.fontSize.base,
  fontWeight: typography.fontWeight.bold,
};

export const messageStyles: CSSProperties = {
  fontFamily: typography.fontFamily.sans,
  fontSize: typography.fontSize.sm,
};

export const closeButtonStyles: CSSProperties = {
  border: "none",
  background: "transparent",
  cursor: "pointer",
  fontSize: "18px",
  lineHeight: 1,
  color: "inherit",
};
