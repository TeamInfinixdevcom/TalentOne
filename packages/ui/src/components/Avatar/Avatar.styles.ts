import { colors, radius, spacing, typography } from "../../tokens";
import type { AvatarSize, AvatarVariant } from "./Avatar.types";

export const avatarBaseStyles = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  flexShrink: 0,
  userSelect: "none" as const,
  borderRadius: radius.full,
  fontFamily: typography.fontFamily.sans,
  fontWeight: typography.fontWeight.semibold,
  lineHeight: 1,
};

export const avatarSizes: Record<
  AvatarSize,
  {
    width: string;
    height: string;
    fontSize: string;
  }
> = {
  sm: {
    width: spacing[8],
    height: spacing[8],
    fontSize: typography.fontSize.sm,
  },
  md: {
    width: spacing[10],
    height: spacing[10],
    fontSize: typography.fontSize.base,
  },
  lg: {
    width: spacing[12],
    height: spacing[12],
    fontSize: typography.fontSize.lg,
  },
};

export const avatarVariants: Record<
  AvatarVariant,
  {
    backgroundColor: string;
    color: string;
  }
> = {
  primary: {
    backgroundColor: colors.primary[600],
    color: colors.text.inverse,
  },

  secondary: {
    backgroundColor: colors.primary[500],
    color: colors.text.inverse,
  },

  neutral: {
    backgroundColor: colors.neutral[200],
    color: colors.text.primary,
  },
};
