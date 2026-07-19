import { colors } from "../../tokens/colors";
import { spacing } from "../../tokens/spacing";
import { radius } from "../../tokens/radius";
import { typography } from "../../tokens/typography";

export const buttonBaseStyles = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",

  gap: spacing[2],

  border: "none",
  cursor: "pointer",

  borderRadius: radius.md,

  fontFamily: typography.fontFamily.sans,
  fontWeight: typography.fontWeight.semibold,

  transition: "all 0.2s ease",
} as const;

export const buttonVariants = {
  primary: {
    background: colors.primary[600],
    color: colors.white,
  },

  secondary: {
    background: colors.neutral[200],
    color: colors.text.primary,
  },

  outline: {
    background: "transparent",
    border: `1px solid ${colors.border.default}`,
    color: colors.text.primary,
  },

  ghost: {
    background: "transparent",
    color: colors.text.primary,
  },

  danger: {
    background: colors.danger[600],
    color: colors.white,
  },
} as const;

export const buttonSizes = {
  sm: {
    padding: `${spacing[2]} ${spacing[3]}`,
    fontSize: typography.fontSize.sm,
  },

  md: {
    padding: `${spacing[3]} ${spacing[4]}`,
    fontSize: typography.fontSize.base,
  },

  lg: {
    padding: `${spacing[4]} ${spacing[6]}`,
    fontSize: typography.fontSize.lg,
  },
} as const;
