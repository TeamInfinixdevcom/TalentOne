import type { CSSProperties } from "react";

import {
  colors,
  radius,
  spacing,
  typography,
} from "../../../tokens";

export const sidebarStyles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "260px",
  height: "100vh",
  backgroundColor: colors.surface.primary,
  borderRight: `1px solid ${colors.border.default}`,
  boxSizing: "border-box",
};

export const headerStyles: CSSProperties = {
  padding: spacing[6],
  borderBottom: `1px solid ${colors.border.default}`,
};

export const contentStyles: CSSProperties = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: spacing[2],
  padding: spacing[4],
};

export const groupStyles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: spacing[1],
};

export const itemStyles: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: spacing[3],
  padding: `${spacing[3]} ${spacing[4]}`,
  borderRadius: radius.md,
  cursor: "pointer",
  fontFamily: typography.fontFamily.sans,
  fontSize: typography.fontSize.sm,
  color: colors.text.secondary,
  transition: "all .2s ease",
};

export const activeItemStyles: CSSProperties = {
  backgroundColor: colors.primary[50],
  color: colors.primary[600],
};

export const footerStyles: CSSProperties = {
  padding: spacing[4],
  borderTop: `1px solid ${colors.border.default}`,
};

export const dividerStyles: CSSProperties = {
  borderTop: `1px solid ${colors.border.default}`,
  margin: `${spacing[3]} 0`,
};
