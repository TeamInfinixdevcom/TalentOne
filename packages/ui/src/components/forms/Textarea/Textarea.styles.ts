import { colors, radius, spacing, typography } from "../../../tokens";
import type { TextareaVariant } from "./Textarea.types";

export const textareaBaseStyles = {
  width: "100%",
  minHeight: "120px",
  padding: spacing[4],
  borderRadius: radius.md,
  fontFamily: typography.fontFamily.sans,
  fontSize: typography.fontSize.base,
  outline: "none",
  resize: "vertical" as const,
  boxSizing: "border-box" as const,
  transition: "all 0.2s ease",
};

export const textareaVariants: Record<
  TextareaVariant,
  React.CSSProperties
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
