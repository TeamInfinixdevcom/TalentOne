import type { CSSProperties } from "react";

import {
  colors,
  radius,
  spacing,
  typography,
} from "../../../tokens";

export const tabsStyles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
};

export const listStyles: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: spacing[2],
  borderBottom: `1px solid ${colors.border.default}`,
};

export const triggerStyles: CSSProperties = {
  padding: `${spacing[3]} ${spacing[4]}`,
  cursor: "pointer",
  borderRadius: `${radius.md} ${radius.md} 0 0`,
  color: colors.text.secondary,
  fontFamily: typography.fontFamily.sans,
  fontSize: typography.fontSize.sm,
  transition: "all .2s ease",
};

export const activeTriggerStyles: CSSProperties = {
  color: colors.primary[600],
  borderBottom: `2px solid ${colors.primary[600]}`,
  fontWeight: typography.fontWeight.semibold,
};

export const contentStyles: CSSProperties = {
  padding: spacing[6],
};
