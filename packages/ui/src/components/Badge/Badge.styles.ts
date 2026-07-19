import { colors, radius, spacing, typography } from "../../tokens";
import type { BadgeSize, BadgeVariant } from "./Badge.types";

export const badgeBaseStyles = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: spacing[1],
  borderRadius: radius.full,
  fontFamily: typography.fontFamily.sans,
  fontWeight: typography.fontWeight.medium,
  whiteSpace: "nowrap" as const,
  userSelect: "none" as const,
};

export const badgeSizes: Record<
  BadgeSize,
  {
    padding: string;
    fontSize: string;
  }
> = {
  sm: {
    padding: `${spacing[1]} ${spacing[2]}`,
    fontSize: typography.fontSize.xs,
  },
  md: {
    padding: `${spacing[2]} ${spacing[3]}`,
    fontSize: typography.fontSize.sm,
  },
  lg: {
    padding: `${spacing[2]} ${spacing[4]}`,
    fontSize: typography.fontSize.base,
  },
};

export const badgeVariants: Record<
  BadgeVariant,
  {
    backgroundColor: string;
    color: string;
    border: string;
  }
> = {
  primary: {
    backgroundColor: colors.primary[600],
    color: colors.text.inverse,
    border: `1px solid ${colors.primary[600]}`,
  },

  success: {
    backgroundColor: colors.success[600],
    color: colors.text.inverse,
    border: `1px solid ${colors.success[600]}`,
  },

  warning: {
    backgroundColor: colors.warning[600],
    color: colors.text.inverse,
    border: `1px solid ${colors.warning[600]}`,
  },

  danger: {
    backgroundColor: colors.danger[600],
    color: colors.text.inverse,
    border: `1px solid ${colors.danger[600]}`,
  },

  neutral: {
    backgroundColor: colors.surface.secondary,
    color: colors.text.primary,
    border: `1px solid ${colors.border.default}`,
  },
};
