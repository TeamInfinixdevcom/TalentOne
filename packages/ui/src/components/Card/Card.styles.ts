import { colors, radius, spacing } from "../../tokens";
import type { CardVariant } from "./Card.types";

export const cardBaseStyles = {
  display: "flex",
  flexDirection: "column" as const,
  gap: spacing[4],
  padding: spacing[6],
  borderRadius: radius.lg,
  backgroundColor: colors.surface.primary,
  transition: "all 0.2s ease",
};

export const cardVariants: Record<
  CardVariant,
  {
    border: string;
    boxShadow: string;
  }
> = {
  default: {
    border: `1px solid ${colors.border.default}`,
    boxShadow: "none",
  },

  outlined: {
    border: `2px solid ${colors.border.strong}`,
    boxShadow: "none",
  },

  elevated: {
    border: `1px solid ${colors.border.default}`,
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  },
};
