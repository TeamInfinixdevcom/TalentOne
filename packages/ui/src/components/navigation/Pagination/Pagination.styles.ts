import type { CSSProperties } from "react";

import {
  colors,
  radius,
  spacing,
  typography,
} from "../../../tokens";

export const paginationStyles: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

export const contentStyles: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: spacing[2],
};

export const itemStyles: CSSProperties = {
  listStyle: "none",
};

export const linkStyles: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minWidth: "36px",
  height: "36px",
  padding: `0 ${spacing[3]}`,
  borderRadius: radius.md,
  border: `1px solid ${colors.border.default}`,
  backgroundColor: colors.surface.primary,
  color: colors.text.primary,
  fontFamily: typography.fontFamily.sans,
  fontSize: typography.fontSize.sm,
  textDecoration: "none",
  cursor: "pointer",
  transition: "all .2s ease",
};

export const activeLinkStyles: CSSProperties = {
  backgroundColor: colors.primary[500],
  borderColor: colors.primary[500],
  color: colors.white,
};
