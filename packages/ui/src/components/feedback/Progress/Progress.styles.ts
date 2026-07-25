import type { CSSProperties } from "react";

import {
  colors,
  radius,
  spacing,
  typography,
} from "../../../tokens";

import type { ProgressVariant } from "./Progress.types";

export const progressContainerStyles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: spacing[2],
  width: "100%",
};

export const progressTrackStyles: CSSProperties = {
  width: "100%",
  height: "8px",
  backgroundColor: colors.border.default,
  borderRadius: radius.full,
  overflow: "hidden",
};

export const progressVariants: Record<
  ProgressVariant,
  CSSProperties
> = {
  primary: {
    backgroundColor: colors.primary[500],
  },

  success: {
    backgroundColor: colors.success[500],
  },

  warning: {
    backgroundColor: colors.warning[500],
  },

  danger: {
    backgroundColor: colors.danger[500],
  },
};

export const progressLabelStyles: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontFamily: typography.fontFamily.sans,
  fontSize: typography.fontSize.sm,
  color: colors.text.primary,
};
