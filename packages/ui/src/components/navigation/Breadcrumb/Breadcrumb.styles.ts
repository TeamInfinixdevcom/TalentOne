import type { CSSProperties } from "react";

import {
  colors,
  spacing,
  typography,
} from "../../../tokens";

export const breadcrumbStyles: CSSProperties = {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: spacing[2],
};

export const itemStyles: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: spacing[2],
};

export const linkStyles: CSSProperties = {
  color: colors.primary[600],
  textDecoration: "none",
  fontFamily: typography.fontFamily.sans,
  fontSize: typography.fontSize.sm,
};

export const currentStyles: CSSProperties = {
  color: colors.text.primary,
  fontFamily: typography.fontFamily.sans,
  fontSize: typography.fontSize.sm,
  fontWeight: typography.fontWeight.medium,
};

export const separatorStyles: CSSProperties = {
  color: colors.text.muted,
  userSelect: "none",
};
