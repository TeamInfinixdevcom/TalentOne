import type { CSSProperties } from "react";

import {
  colors,
  radius,
  spacing,
  typography,
} from "../../../tokens";

import type { SelectVariant } from "./Select.types";

export const selectBaseStyles: CSSProperties = {
  width: "100%",
  padding: spacing[3],
  borderRadius: radius.md,
  fontFamily: typography.fontFamily.sans,
  fontSize: typography.fontSize.base,
  outline: "none",
  boxSizing: "border-box",
  transition: "all 0.2s ease",
  cursor: "pointer",
};

export const selectVariants: Record<
  SelectVariant,
  CSSProperties
> = {
  outlined: {
    backgroundColor: colors.white,
    border: `1px solid ${colors.border.default}`,
    color: colors.text.primary,
  },

  filled: {
    backgroundColor: colors.surface.secondary,
    border: "none",
    color: colors.text.primary,
  },
};
