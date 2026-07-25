import { colors, radius, spacing, typography } from "../../tokens";
import type { InputSize, InputVariant } from "./Input.types";

export const inputBaseStyles = {
  width: "100%",
  fontFamily: typography.fontFamily.sans,
  fontSize: typography.fontSize.sm,
  color: colors.text.primary,
  borderRadius: radius.md,
  outline: "none",
  transition: "all 0.2s ease",
  boxSizing: "border-box" as const,
};

export const inputSizes: Record<
  InputSize,
  {
    padding: string;
    fontSize: string;
  }
> = {
  sm: {
    padding: `${spacing[2]} ${spacing[3]}`,
    fontSize: typography.fontSize.xs,
  },
  md: {
    padding: `${spacing[3]} ${spacing[4]}`,
    fontSize: typography.fontSize.sm,
  },
  lg: {
    padding: `${spacing[4]} ${spacing[5]}`,
    fontSize: typography.fontSize.base,
  },
};

export const inputVariants: Record<
  InputVariant,
  {
    backgroundColor: string;
    border: string;
  }
> = {
  default: {
    backgroundColor: colors.surface.primary,
    border: `1px solid ${colors.border.default}`,
  },

  filled: {
    backgroundColor: colors.surface.secondary,
    border: `1px solid transparent`,
  },

  outlined: {
    backgroundColor: colors.surface.primary,
    border: `2px solid ${colors.border.strong}`,
  },
};
