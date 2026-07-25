import type { CSSProperties } from "react";

import {
  colors,
  spacing,
  typography,
} from "../../../tokens";

export const navbarStyles: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  minHeight: "64px",
  padding: `0 ${spacing[6]}`,
  backgroundColor: colors.surface.primary,
  borderBottom: `1px solid ${colors.border.default}`,
  boxSizing: "border-box",
};

export const brandStyles: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: spacing[3],
  fontFamily: typography.fontFamily.sans,
  fontWeight: typography.fontWeight.bold,
  fontSize: typography.fontSize.lg,
};

export const contentStyles: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: spacing[6],
  flex: 1,
  marginLeft: spacing[8],
};

export const itemStyles: CSSProperties = {
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  color: colors.text.secondary,
  fontFamily: typography.fontFamily.sans,
  fontSize: typography.fontSize.sm,
};

export const actionsStyles: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: spacing[4],
};
