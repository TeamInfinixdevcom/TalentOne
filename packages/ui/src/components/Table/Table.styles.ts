import { colors, spacing, typography } from "../../tokens";

export const tableStyles = {
  width: "100%",
  borderCollapse: "collapse" as const,
  fontFamily: typography.fontFamily.sans,
  fontSize: typography.fontSize.sm,
  color: colors.text.primary,
  backgroundColor: colors.surface.primary,
};

export const tableHeaderStyles = {
  backgroundColor: colors.surface.secondary,
};

export const tableHeaderCellStyles = {
  padding: spacing[3],
  textAlign: "left" as const,
  fontWeight: typography.fontWeight.semibold,
  borderBottom: `1px solid ${colors.border.strong}`,
};

export const tableCellStyles = {
  padding: spacing[3],
  borderBottom: `1px solid ${colors.border.default}`,
};
